import { connectToDatabase } from "@/lib/mongoose"
import { NextResponse } from "next/server"
import PostModel from "@/database/post-modal"
import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"
import { IPost } from "@/types"

export const POST = async (req: Request) => {
    try {
        await connectToDatabase()
        const { user }: any = await getServerSession(authOptions)
        const { body } = await req.json()

        if (!body || !user._id) {
            return NextResponse.json({ success: false, message: `Data is not defined!` })
        }
        
        const post = await PostModel.create({ body, user: user._id })
        return NextResponse.json({ success: true, message: `Post created!`, post })
    } catch (error) {
        const result = error as Error
        return NextResponse.json({ success: false, message: result.message, error: result })
    }
}

export const PUT = async (req: Request) => {
    try {
        await connectToDatabase()
        const { user }: any = await getServerSession(authOptions)
        const { body, postId } = await req.json()

        const post = await PostModel.findById(postId)
        if (user._id !== post.user) {
            return NextResponse.json({ success: false, message: `No authorizated! 😟😞` })
        }

        const updPost = await PostModel.findByIdAndUpdate(postId, body)
        return NextResponse.json({ success: true, message: `Post updated!`, updPost })
    } catch (error) {
        const result = error as Error
        return NextResponse.json({ success: false, message: result.message, error: result })
    }
}

export const GET = async (req: Request) => {
    try {
        await connectToDatabase()  
        const session: any = await getServerSession(authOptions)
        
        const url = new URL(req.url)
        const category = url.searchParams.get('category')
        const limit = url.searchParams.get('limit')

        let posts: IPost[] = []
        if (category === 'popular') {
            posts = await PostModel.aggregate([
                {
                    $addFields: {
                        likesCount: { $size: "$likes" }
                    }
                },
                { $sort: { likesCount: -1 } },
                { $limit: Number(limit) },
                {
                    $lookup: {
                        from: "users",
                        localField: "user",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                { $unwind: "$user" }
            ])
        }

        if (category === 'current') {
            posts = await PostModel.aggregate([
                {
                    $addFields: {
                        commentsCount: { $size: "$comments" }
                    }
                },
                { $sort: { commentsCount: -1 } },
                { $limit: Number(limit) },
                {
                    $lookup: {
                        from: "users",
                        localField: "user",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                { $unwind: "$user" }
            ])
        }

        if (category === 'new') {
            posts = await PostModel.find()
                .sort({ createdAt: -1 })
                .limit(Number(limit))
                .populate("user", "_id email username profileImage");
        }

        if (category === 'old') {
            posts = await PostModel.find()
                .sort({ createdAt: 1 })
                .limit(Number(limit))
                .populate("user", "_id email username profileImage");
        }

        if (category === 'all') {
            posts = await PostModel.find()
                .limit(Number(limit))
                .populate("user", "_id email username profileImage");
        }

        if (category === 'professional') {
            posts = await PostModel.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "user",
                        foreignField: "_id",
                        as: "user"
                    }
                },
                { $unwind: "$user" },
                { $sort: { "user.point": -1 } },
                { $limit: Number(limit) || 10 }
            ])
        }


        posts = posts.map((post: any) => {
            const liked = post.likes?.some((id: any) => id.toString() === session?.user._id.toString())
            return {
                _id: post._id.toString(),
                body: post.body,
                user: {
                    _id: post.user?._id?.toString() || "",
                    email: post.user?.email || "",
                    username: post.user?.username || "",
                    profileImage: post.user?.profileImage || ""
                },
                likes: post.likes?.length || 0,
                coments: post.comments?.length || post.coments?.length || 0,
                hasLiked: liked || false,
                createdAt: post.createdAt,
                updateAt: post.updatedAt
            }
        })

        return NextResponse.json({ success: true, message: `Get all post!`, posts })
    } catch (error) {
        const result = error as Error
        return NextResponse.json({ success: false, message: result.message, error: result })
    }
}

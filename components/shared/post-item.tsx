"use client"

import { IPost } from "@/types"
import Image from "next/image"
import { FaHeart } from "react-icons/fa"
import { MessageCircle, Heart } from "lucide-react"
import moment from "moment"

interface PostCardProps {
  post: IPost
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="border transition p-5 rounded-sm hover:shadow-md shadow-sky-950 w-full">
      <div className="flex items-center gap-3 mb-4 hover:cursor-pointer">
        <Image
          src={post?.user?.profileImage || "/default-avatar.avif"}
          alt={post?.user?.username || "image"}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white cursor-pointer hover:underline">{post?.user?.username ? post?.user?.username : post?.user?.email}</h3>
          <p className="text-sm text-slate-400">{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>

      <p className="text-slate-300 mb-4 whitespace-pre-line lg:line-clamp-4 line-clamp-3 border-b pb-1">{post.body}</p>

      <div className="flex items-center gap-6 text-slate-400 text-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          {post.hasLiked ? (
            <FaHeart className="w-5 h-5 text-red-500" />
          ) : (
            <Heart className="w-5 h-5 text-red-500" />
          )}
          <span>{post?.likes}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <MessageCircle className="w-5 h-5 text-blue-400" />
          <span>{post?.coments}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard

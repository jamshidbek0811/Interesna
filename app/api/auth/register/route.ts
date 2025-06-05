import { connectToDatabase } from "@/lib/mongoose"
import User from "@/database/user-model"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        await connectToDatabase()
        const { email, username, password } = await req.json()

        const existingUser = await User.findOne({ username: username })
        if(existingUser){
            return NextResponse.json({succes: false, message: "Username already exist", status: 400})
        }

        const existingUserEmail = await User.findOne({ email: email })
        if(existingUserEmail){
            return NextResponse.json({succes: false, message: "Email already exist", status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ email, password: hashedPassword, username })
        return NextResponse.json({succes: true, user })
    } catch (error) {
        const result = error as Error
        return NextResponse.json({error: result.message, status: 400})
    }
} 
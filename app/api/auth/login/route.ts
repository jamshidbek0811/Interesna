import { connectToDatabase } from "@/lib/mongoose"
import User from "@/database/user-model"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        await connectToDatabase()
        const { email, password } = await req.json()
        
        const existingUser = await User.findOne({ email: email })
        if(!existingUser){
            return NextResponse.json({succes: false, message: "User not found in this email!", status: 400})
        }

        if(!existingUser.password){
            return NextResponse.json({succes: false, message: "You before sign in with google or github!", status: 400})
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password)
        if(!checkPassword){
            return NextResponse.json({succes: false, message: "Password is incorrect", status: 400})
        }

        return NextResponse.json({succes: true, existingUser })
    } catch (error) {
        const result = error as Error
        return NextResponse.json({succes: false, error: result.message, status: 400})
    }
} 
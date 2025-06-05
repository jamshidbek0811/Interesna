import User from "@/database/user-model";
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./mongoose";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                await connectToDatabase()
                const user = await User.findOne({ email: credentials?.email})
                if(user){
                    return user
                } else {
                    return null
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async session({ session }){
            await connectToDatabase()
            const isExistingUser = await User.findOne({ email: session?.user?.email})
            if(!isExistingUser){
                const newUser = await User.create({email: session.user?.email, name: session.user?.name, profileImage: session.user?.image}) 
                session.user = await newUser
            } 

            session.user = await isExistingUser
            return session
        }
    },
    session: { strategy: "jwt" },
    jwt: { secret: process.env.JWT_SECRET! },
    secret: process.env.NEXT_SECRET!
}
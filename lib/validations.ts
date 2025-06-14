import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(2).max(50),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
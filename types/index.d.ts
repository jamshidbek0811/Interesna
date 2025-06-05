import { LucideIcon, LucideProps } from "lucide-react"
import React, { ReactElement, ReactNode } from "react"

export interface IUser {
    _id?: string,
    username?: string
    email?: string
    profileImage?: string
    temp?: number
    point?: number
    notifications?: INotification[]
    posts?: IPost[]
    updatedAt?: Date
    createdAt?: Date
}

export interface IPost {
    _id: string,
    user: {
        _id: string
        profileImage?: string
        username?: string
        email: string
    }
    body: string
    likes: number
    coments: number
    hasLiked?: boolean
    createdAt: Date
    updateAt: Date
}

export interface INotification {
    _id: string
    body: string
    createdAt: Date
}

export interface IFeature {
  title: string
  description: string
  icon: LucideProps
}

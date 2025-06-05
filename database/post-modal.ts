import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    body: { type: String },
    user: { 
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    likes: [
        { 
            type: Schema.Types.ObjectId,
            ref: "User" 
        }
    ],
    coments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment" 
        }
    ]
}, { timestamps: true })

const PostModel = models.Post || model("Post", postSchema)
export default PostModel
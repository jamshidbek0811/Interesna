import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    profileImage: { type: String },
    temp: { type: Number, default: 1 },
    point: { type: Number, default: 0 },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    // notifications: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Notification"
    //     }
    // ],
    bio: { type: String },
    location: { type: String }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User
// post Model

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: []
}, { timestamps: true })

const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
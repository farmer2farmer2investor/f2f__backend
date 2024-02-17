// post Model

import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
}, { timestamps: true })

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
// Comment Model

import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true })

const CommentModel = mongoose.model("Comment", CommentSchema);
export default CommentModel;
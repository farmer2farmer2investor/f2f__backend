//  Like Model

import mongoose from "mongoose";

const LikeSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
}, { timestamps: true })

const LikeModel = mongoose.model("Like", LikeSchema);
export default LikeModel;
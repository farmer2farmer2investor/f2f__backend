// farmer Model

import mongoose from "mongoose";

const FarmerSchema = mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    cultivation: {
        type: String,
        requried: true
    },
    about: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    // posts
    posts: [],
    likes: [],
    following: [],
    followers: []
}, { timestamps: true })

const FarmerModel = mongoose.model("Farmer", FarmerSchema);
export default FarmerModel;
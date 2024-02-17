// farmer Model

import mongoose from "mongoose";

const FarmerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cultivation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    location: {
      type: String,
      required: true  
    },
    postalCode: {
        type: String,
        required: true
    }
}, { timestamps: true })

const FarmerModel = mongoose.model("Farmer", FarmerSchema);
export default FarmerModel;
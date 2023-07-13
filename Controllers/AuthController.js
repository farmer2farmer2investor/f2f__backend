import FarmerModel from "../Models/farmerModel.js";

// register a new user
export const registerfarmer = async (req, res) => {
    const { name, cultivation, about, profilePicture, landmark, district, state, postalCode } = req.body;

    const farmer = new FarmerModel({ name, cultivation, about, profilePicture, landmark, district, state, postalCode });

    try {
        const oldUser = await FarmerModel.findOne({ email });
        if (oldUser) {
            res.status(400).json({ message: "user is already registered" });
        }
        await farmer.save();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
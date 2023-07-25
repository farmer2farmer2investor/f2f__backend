import FarmerModel from "../Models/farmerModel.js";

// register a new user
export const registerfarmer = async (req, res) => {
    const { name, password, cultivation, about, profilePicture, landmark, district, state, postalCode } = req.body;

    const farmer = new FarmerModel({ name, password, cultivation, about, profilePicture, landmark, district, state, postalCode });

    try {
        const oldUser = await FarmerModel.findOne({ name: name });
        if (oldUser) {
            res.status(400).json({ message: "user is already registered" });
        } else {
            await farmer.save();
            res.status(200).json(farmer);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// login an user
export const logIn = async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await FarmerModel.findOne({ name: name });

        if (user) {
            if (password === user.password) {
                res.status(200).json(user);
            } else {
                res.status(400).json("Wrong password");
            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
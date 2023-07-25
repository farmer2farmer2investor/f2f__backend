import PostModel from "../Models/postModel.js";


// create a post 
export const createPost = async (req, res) => {
    const { userId, image, category, description, location } = req.body;

    const newPost = new PostModel({ userId, image, category, description, location });

    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
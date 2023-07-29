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

// get a post
export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};


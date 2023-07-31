import PostModel from "../Models/postModel.js";
import FarmerModel from "../Models/farmerModel.js";
import mongoose from "mongoose";

// create a post 
export const createPost = async (req, res) => {
    const { userId, name, profilePicture, image, category, description, location } = req.body;

    const newPost = new PostModel({ userId, name, profilePicture, image, category, description, location });

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
        console.log(id);
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get user posts
export const userPosts = async (req, res) => {
    const userId = req.params.id;
    try {
        const posts = await PostModel.find({ userId: userId });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

// like/dislike a post 
export const likePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(id);
        if (post.likes.includes(userId)) {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("Post disliked");
        } else {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("Post liked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get timeline posts
export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({ userId: userId });

        const followingPosts = await FarmerModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);

        res.status(200).json(
            currentUserPosts
                .concat(...followingPosts[0].followingPosts)
                .sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                })
        );
    } catch (error) {
        res.status(500).json(error);
    }
}
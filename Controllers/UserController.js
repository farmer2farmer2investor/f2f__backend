import FarmerModel from "../Models/farmerModel.js";


// get an user
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await FarmerModel.findById(id);
        console.log(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

// follow user
export const followUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;

    console.log(id, _id);

    if (_id == id) {
        res.status(403).json("Action Forbidden");
    } else {
        try {
            const followUser = await FarmerModel.findById(id);
            const followingUser = await FarmerModel.findById(_id);

            if (!followUser.followers.includes(_id)) {
                await followUser.updateOne({ $push: { followers: _id } });
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed");
            } else {
                res.status(403).json("you are already following this id");
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};

// Unfollow a User
// changed
export const unfollowUser = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.body;

    if (_id === id) {
        res.status(403).json("Action Forbidden")
    }
    else {
        try {
            const unFollowUser = await UserModel.findById(id)
            const unFollowingUser = await UserModel.findById(_id)


            if (unFollowUser.followers.includes(_id)) {
                await unFollowUser.updateOne({ $pull: { followers: _id } })
                await unFollowingUser.updateOne({ $pull: { following: id } })
                res.status(200).json("Unfollowed Successfully!")
            }
            else {
                res.status(403).json("You are not following this User")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
};



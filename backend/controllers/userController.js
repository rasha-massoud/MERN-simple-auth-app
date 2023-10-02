import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    const user = await User.findOne({ email });
    
    if (user) {     
        generateToken(res, user._id );  
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create ({
        name,
        email,
        password
    });

    if (user) {     
        generateToken(res, user._id );  
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error("Invalid user data");
    }

});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User"})
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Profile"})
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update User Profile"})
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}
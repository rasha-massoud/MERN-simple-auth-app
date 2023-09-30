import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Auth User"})
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User"})
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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc: Register a new user
// @route: POST /api/users/
// @access: Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    
    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    // check if user already exists
    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "30d",
            }),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.json({ message: "User Registered Successfully" });
});

// @desc: Login user
// @route: POST /api/users/login
// @access: Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Login Successful" });
});

// @desc: Get user profile
// @route: GET /api/users/profile
// @access: Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json({ message: "User Profile Loaded Successfully" });
});

module.exports = { registerUser, loginUser, getUserProfile };

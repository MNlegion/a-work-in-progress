const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc: Register a new user
// @route: POST /api/users/
// @access: Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Registered" });
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

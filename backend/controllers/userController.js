const registerUser = (req, res) => {
  res.json({ message: "User Registered" });
};

const loginUser = (req, res) => {
  res.json({ message: "User Login Successful" });
};

const getUserProfile = (req, res) => {
  res.json({ message: "User Profile Loaded Successfully" });
};

module.exports = { registerUser, loginUser, getUserProfile };

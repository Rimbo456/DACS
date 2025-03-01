const User = require("../models/user.model");

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getProfile;
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfor = await User.findOne({ email: email });
    if (userInfor === null) {
      return res.json({ err: true, message: "Wrong email or password" });
    }
    if (userInfor.email == email && userInfor.password == password) {
      const token = jwt.sign(
        {
          id: userInfor.id,
          userName: userInfor.userName,
          email: userInfor.email,
          admin: userInfor.admin,
        },
        "watch"
      );
      return res.json({
        err: false,
        message: "Login successful",
        token: token,
      });
    } else {
      return res.json({ err: true, message: "Login failled" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = login;

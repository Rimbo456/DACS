const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const newAccount = new User({
      email: email,
      userName: userName,
      password: password,
      admin: false,
      number: "",
      address: "",
      wishlist: [],
      cart: [],
    });
    await newAccount
      .save()
      .then((acount) => {
        console.log("account saved");
        res.status(201).json({
          message: "Account created successfully",
          account: newAccount,
          err: false,
        });
      })
      .catch((err) => {
        console.error("error saving");
        res.status(201).json({
          message: "Account created successfully",
          account: newAccount,
          err: true,
        });
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = register;

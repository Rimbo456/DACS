const User = require("../models/user.model");

const editInfor = async (req, res) => {
  try {
    const { name, number, address } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.user.email },
      { $set: { userName: name, number: number, address: address } },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = editInfor;

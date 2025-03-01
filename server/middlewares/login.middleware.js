const validateAccount = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({ err: true, message: "Email is required" });
  }
  if (!password) {
    return res.json({ err: true, message: "Password is required" });
  }
  next();
};

module.exports = validateAccount;

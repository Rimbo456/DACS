const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "watch", (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
};
module.exports = verifyToken;

/** @format */

const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provideda.");
  try {
    const decoded = jwt.verify(token, "PrivateKey");
    req.user = decoded;
    if (!req.user.isAdmin) return "user not an admin";
    next();
  } catch (ex) {
    console.log(`${ex}`);
    res.status(400).send(`${ex}`); //("Session Expired! Please Login Again");
  }
};

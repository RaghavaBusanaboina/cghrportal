/** @format */

const jwt = require("jsonwebtoken");
// const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send("Access denied. No token providedae.");
  try {
    const decoded = jwt.verify(token, "PrivateKey");
    console.log(decoded);
    req.user = decoded;
    next();
    return decoded;
  } catch (ex) {
    console.log(`${ex}`);
    res.status(400).send(`issueeeeeee${ex}`); //("Session Expired! Please Login Again");
  }
};

/** @format */

const jwt = require("jsonwebtoken");
const config = require("config");
const { EmployeeLogin } = require("../models/userLogin");
const { TokenBlackList } = require("../models/blackListToken");

// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");
//   if (!token)
//     return res.status(401).send("Access denied. No token providedae.");
//   try {
//     const decoded = jwt.verify(token, "PrivateKey");
//     console.log(decoded);
//     req.user = decoded;
//     next();
//     return decoded;
//   } catch (ex) {
//     console.log(`${ex}`);
//     res.status(400).send(`issueeeeeee${ex}`); //("Session Expired! Please Login Again");
//   }
// };

module.exports = async function (req, res, next) {
  const token = req.headers["x-auth-token"];
  if (!token)
    return res.status(404).send("Access denied. No token providedae.");
  TokenBlackList.findOne({ token: token }).then((found) => {
    if (found) {
      jwt.verify(token, config.get("jwtPrivateKey"), async (err, payload) => {
        const login = await EmployeeLogin.findOne({
          EmployeeId: payload.EmployeeId,
          token_id: payload.token_id,
        });
        login.logged_out = true;
        login.token_deleted = true;
        await login.save();
      });
      details = {
        Status: "Failure",
        Details: "Token blacklisted. Cannot use this token.",
      };

      return res.status(401).json(details);
    } else {
      jwt.verify(token, config.get("jwtPrivateKey"), async (err, payload) => {
        if (err) return res.sendStatus(403);
        if (payload) {
          const login = await EmployeeLogin.findOne({
            EmployeeId: payload.EmployeeId,
            token_id: payload.token_id,
          });
          if (login.token_deleted == true) {
            await login.save();
            const blacklist_token = new TokenBlackList({
              token: token,
            });
            await blacklist_token.save();
            details = {
              Status: "Failure",
              Details: "Token blacklisted. Cannot use this token.",
            };

            return res.status(401).json(details);
          } else {
            // login.logged_out = true;
            // login.token_deleted = true;
            // await login.save();
            // const blacklist_token = new TokenBlackList({
            //   token: token,
            // });
            // await blacklist_token.save();
            console.log("else block in authemp");
          }
        }
        next();
      });
    }
  });
};

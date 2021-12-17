/** @format */

const jwt = require("jsonwebtoken");
const { EmployeeLogin } = require("../models/userLogin");
const { TokenBlackList } = require("../models/blackListToken");
const config = require("config");

//MIDDLEWARE TO AUTHENTICTAE TOKEN BEFORE ACCESSING PROTECTED ROUTES
async function blacklistToken(req, res, next) {
  const token = req.headers["x-auth-token"];
  if (token == null) return res.sendStatus(401);

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
            login.logged_out = true;
            await login.save();
            const blacklist_token = new TokenBlackList({
              token: token,
            });
            blacklist_token.save();
          } else {
            login.logged_out = true;
            login.token_deleted = true;
            await login.save();
            const blacklist_token = new TokenBlackList({
              token: token,
            });
            blacklist_token.save();
          }
        }
        next();
      });
    }
  });
}
module.exports = blacklistToken;

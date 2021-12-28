/** @format */
//schema for blacklist token
const mongoose = require("mongoose");
try {
  const tokenBlacklistSchema = mongoose.Schema({
    token: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  });
  const TokenBlackList = mongoose.model("tokenBlacklist", tokenBlacklistSchema);
  exports.TokenBlackList = TokenBlackList;
} catch (e) {
  console.log(`TokenBlackList model${e}`);
}

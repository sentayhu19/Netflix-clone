const mongoose = require("mongoose");

const UserScema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamp: true }
);
module.exports = mongoose.model("user", UserScema);

const express = require("express").Router();
const User = require("../models/user");
const CryptoJS = require("Crypto-js");
const router = require("./auth");
const verify = require("../verifytooken");
//Updates

router.put("/:id", verify, async (req, res) => {
  if (req.user.id == req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: rew.body,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
});
module.exports = router;
//delete
//get
// get all
// get user status

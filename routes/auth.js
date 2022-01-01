const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//CREATE USER - POST
router.post("/newuser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: Crypto.arguments.encrypt(
        req.body.password,
        process.env.
  )});
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

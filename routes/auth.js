const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//CREATE USER - POST
router.post("/newuser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN - POST
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong username or password");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong username or password");

    res.status(200).json(user._doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

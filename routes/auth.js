const router = require("express").Router();
const User = require("../model/User");

//CREATE USER - POST
router.post("/newuser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

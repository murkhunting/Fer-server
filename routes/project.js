const router = require("express").Router();
const Project = require("../models/Project");

//CREATE PROJECT
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

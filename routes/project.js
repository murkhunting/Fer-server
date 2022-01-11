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

//UPDATE PROJECT - put
router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PROJECT - delete
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("The project has been deleted");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET ALL PROJECTS - get
router.get("/all", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM 9 PROJECTS - get
router.get("/random", async (req, res) => {
  let projects = [];

  try {
    projects = await Project.aggregate([{ $sample: { size: 12 } }]);
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL VIDEOS - get
router.get("/videos", async (req, res) => {
  let projects = [];
  const video = "video";

  try {
    projects = await Project.aggregate([{ $match: { type: video } }]);
    res.status(200).json(projects.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PHOTOS - get
router.get("/photos", async (req, res) => {
  let projects = [];
  const photo = "photo";

  try {
    projects = await Project.aggregate([{ $match: { type: photo } }]);
    res.status(200).json(projects.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE PROJECT - get
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

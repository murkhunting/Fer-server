const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  type: { type: String, required: true },
  architecture: { type: Boolean, required: true },
  titulo: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  year: { type: String, required: true },
  loca: { type: String, required: true },
  client: { type: String, required: true },
  byn: { type: String, required: true },
  gif: { type: String, required: true },
  links: [{ type: String }],
});

module.exports = mongoose.model("Project", ProjectSchema);

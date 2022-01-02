const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  video: { type: Boolean, default: true },
  titulo: { type: String, required: true, unique: true },
  descripcion: { type: String, required: true },
  byn: { type: String, required: true },
  gif: { type: String, required: true },
  links: [{ type: String }],
});

module.exports = mongoose.model("Project", ProjectSchema);

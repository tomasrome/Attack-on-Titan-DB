const mongoose = require("../config/mongodb");

const charactersSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  status: String,
  affiliation: String,
});

const charactersModel = mongoose.model("characters", charactersSchema);

module.exports = charactersModel;

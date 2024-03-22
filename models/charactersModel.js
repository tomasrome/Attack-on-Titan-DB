const mongoose = require("../config/mongodb");

const charactersSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "El campo es olbigatorio"],
  },
  status: String,
  gender: String,
  affiliation: String,
  episode: String,
  image: String,
});

const charactersModel = mongoose.model("characters", charactersSchema);

module.exports = charactersModel;

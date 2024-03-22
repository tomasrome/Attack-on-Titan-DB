const mongoose = require("../config/mongodb");

const locationsSchema = mongoose.Schema({
  name: String,
  territory: String,
  region: String,
  img: String,
});

const locationsModel = mongoose.model("locations", locationsSchema);

module.exports = locationsModel;

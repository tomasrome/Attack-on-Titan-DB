const CharactersModel = require("../models/charactersModel");

const getAll = function (req, res, next) {
  const document =
    "Eren Jaeger - Mikasa Ackerman - Armin Alert - Connie Springer";

  res.json(document);
};

const create = async function (req, res, next) {
  try {
    const character = new CharactersModel({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      status: req.body.status,
      affiliation: req.body.affiliation,
    });
    const document = await character.save();
    res.json(document);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
  create,
};

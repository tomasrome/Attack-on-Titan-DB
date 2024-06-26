const CharactersModel = require("../models/charactersModel");

const getAll = async function (req, res, next) {
  try {
    const document = await CharactersModel.find();
    res.status(200).json(document);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getById = async function (req, res, next) {
  try {
    const document = await CharactersModel.findById(req.params.id);
    res.status(200).json(document);
  } catch (e) {
    console.log(e);
  }
};

const create = async function (req, res, next) {
  try {
    const character = new CharactersModel({
      name: req.body.name,
      status: req.body.status,
      gender: req.body.gender,
      episode: req.body.episode,
      affiliation: req.body.affiliation,
      image: req.body.image,
    });
    const document = await character.save();
    res.status(201).json(document);
  } catch (e) {
    console.log(e);
    res.status(400).json(e.message);
  }
};

const update = async function (req, res, next) {
  try {
    await CharactersModel.updateOne({ _id: req.params.id }, req.body);
    res.status(204).json();
  } catch (e) {
    console.log(e);
  }
};

const deleteChar = async function (req, res, next) {
  try {
    await CharactersModel.deleteOne({ _id: req.params.id });
    res.status(204).json();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteChar,
};

const LocationsModel = require("../models/locationsModel");

const getAll = async function (req, res, next) {
  try {
    const document = await LocationsModel.find();
    res.status(200).json(document);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getById = async function (req, res, next) {
  try {
    const document = await LocationsModel.findById(req.params.id);
    res.status(200).json(document);
  } catch (e) {
    console.log(e);
  }
};

const create = async function (req, res, next) {
  try {
    const character = new LocationsModel({
      name: req.body.name,
      territory: req.body.territory,
      region: req.body.region,
      img: req.body.img,
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
    await LocationsModel.updateOne({ _id: req.params.id }, req.body);
    res.status(204).json();
  } catch (e) {
    console.log(e);
  }
};

const deleteChar = async function (req, res, next) {
  try {
    await LocationsModel.deleteOne({ _id: req.params.id });
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

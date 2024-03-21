var express = require("express");
var router = express.Router();

const charactersControllers = require("../controllers/charactersControllers");

/* GET users listing. */
router.get("/", charactersControllers.getAll);

router.post("/", charactersControllers.create);

module.exports = router;

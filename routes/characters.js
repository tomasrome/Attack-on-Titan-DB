var express = require("express");
var router = express.Router();

const charactersControllers = require("../controllers/charactersControllers");

/* GET users listing. */
router.get("/", charactersControllers.getAll);

router.get("/:id", charactersControllers.getById);

router.post("/", charactersControllers.create);

router.put("/:id", charactersControllers.update);

router.delete("/:id", charactersControllers.deleteChar);

module.exports = router;

var express = require("express");
var router = express.Router();

const locationsController = require("../controllers/locationsControllers");

/* GET users listing. */
router.get("/", locationsController.getAll);

router.get("/:id", locationsController.getById);

router.post("/", locationsController.create);

router.put("/:id", locationsController.update);

router.delete("/:id", locationsController.deleteChar);

module.exports = router;

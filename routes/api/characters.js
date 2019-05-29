const router = require("express").Router();
const characterController = require("../../controllers/characterController");

// Matches with "/api/characters"
router.route("/")
  .get(characterController.findAll)
  .post(characterController.create);

// Matches with "/api/characters/:id"
router.route("/:id")
  .get(characterController.findById)
  .post(characterController.update)
  .delete(characterController.remove);

module.exports = router;

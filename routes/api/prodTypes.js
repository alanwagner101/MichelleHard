const router = require("express").Router();
const prodTypesController = require("../../controllers/prodTypesController");

// Matches with "/api/books"
router.route("/")
  .post(prodTypesController.create)
  .get(prodTypesController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(prodTypesController.findById)
  .put(prodTypesController.update)
  .delete(prodTypesController.remove);

module.exports = router;
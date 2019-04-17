const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/books"
router.route("/")
  .post(productsController.create)
  .get(productsController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

module.exports = router;
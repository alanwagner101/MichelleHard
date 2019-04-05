const router = require("express").Router();
const adminController = require("../../controllers/adminController");

// Matches with "/api/books"
router.route("/")
  .post(adminController.create)
  .get(adminController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(adminController.findById)
  .put(adminController.update)
  .delete(adminController.remove);

module.exports = router;
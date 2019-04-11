const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/books"
router.route("/")
  .post(eventsController.create)
  .get(eventsController.findAll);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
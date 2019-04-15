const router = require("express").Router();
const userRoutes = require("./admin")
const eventsRoutes = require("./events")

// Events routes
router.use("/admin", userRoutes);
router.use("/schedule", eventsRoutes);

module.exports = router;
const router = require("express").Router();
const userRoutes = require("./admin");
const eventsRoutes = require("./events");
const prodTypeRoutes = require("./prodTypes");
const productsRoutes = require("./products");

// Events routes
router.use("/admin", userRoutes);
router.use("/schedule", eventsRoutes);
router.use("/prodtypes", prodTypeRoutes);
router.use("/products", productsRoutes);

module.exports = router;
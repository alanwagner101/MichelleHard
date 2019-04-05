const router = require("express").Router();
const userRoutes = require("./admin")

// Events routes
router.use("/admin", userRoutes)

module.exports = router;
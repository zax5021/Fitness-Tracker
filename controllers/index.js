const router = require("express").Router();
const apiRouter = require("./api")
const htmlRoutes = require("./htmlRoutes")

router.use("/api", apiRouter);
router.use("/", htmlRoutes);

module.exports = router;
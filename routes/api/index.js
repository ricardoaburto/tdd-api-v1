// RUTAS API
const router = require("express").Router();

router.use("/produtcs", require("./products.route"));

module.exports = router;

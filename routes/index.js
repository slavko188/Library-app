const { Router } = require("express");
const router = new Router();

// GET
router.get("/", require("../controllers/home/renderHome.js"));

//MIDLWERE
router.use("/portfolio", require("../controllers/portfolio/renderAboutPage"));

module.exports = router;

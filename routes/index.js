const { Router } = require("express");
const router = new Router();

// GET
router.get("/", require("../controllers/portfolio/renderHomePage"));
router.get("/about", require("../controllers/portfolio/renderAboutPage"));
router.get("/contact", require("../controllers/portfolio/renderContactPage"));

module.exports = router;

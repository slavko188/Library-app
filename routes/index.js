const { Router } = require("express");
const verifyAuth = require("../middleware/verifyAuth");
const router = new Router();

// GET
router.get("/", (req, res) => {
  res.render("signUpPage");
});
router.get("/login", (req, res) => {
  res.render("loginPage");
});

router.use("/auth", require("./auth"));
router.use("/home", verifyAuth, require("./home"));
router.get("/about", require("../controllers/portfolio/renderAboutPage"));
router.get("/contact", require("../controllers/portfolio/renderContactPage"));
router.get("/hobi", require("../controllers/portfolio/renderHobiPage"));

module.exports = router;

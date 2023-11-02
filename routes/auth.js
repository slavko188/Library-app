const { Router } = require("express");
const verifyAuth = require("../middleware/verifyAuth");
const router = new Router();

//GET
router.get("/logout", verifyAuth, require("../controllers/auth/logOut"));
router.get("/activate/:id", require("../controllers/auth/activateAccount"));

//POST
router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));

module.exports = router;

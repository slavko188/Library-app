const { Router } = require("express");
const router = new Router();

//POST
router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));

//GET
router.get("/logout", require("../controllers/auth/logOut"));

module.exports = router;

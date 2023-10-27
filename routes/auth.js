const { Router } = require("express");
const router = new Router();

router.post("/signup", require("../controllers/auth/signUp"));
router.post("/login", require("../controllers/auth/login"));

module.exports = router;

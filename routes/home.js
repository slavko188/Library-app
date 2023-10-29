const { Router } = require("express");
const router = new Router();

router.get("/", require("../controllers/home/renderHomePage"));

module.exports = router;

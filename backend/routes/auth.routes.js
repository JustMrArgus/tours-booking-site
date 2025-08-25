const express = require("express");
const authController = require("../controllers/auth.controller");
const protect = require("../middleware/protect");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.use(protect);

router.get("/logout", authController.logout);

module.exports = router;

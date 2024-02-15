const express = require("express");
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signSchema, loginSchema } = require("../validators/auth-validator");


const router = express.Router();
router.route("/").get(authControllers.home)
router.route("/register").post(validate(signSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);

module.exports = router;
const express = require("express");

const { validateData, authenticate } = require("../../middlewares");

const { schema } = require("../../models/users");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateData(schema.registerSchema), ctrl.register);

router.post("/login", validateData(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;

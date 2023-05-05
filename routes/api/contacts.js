const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateData, validateOnFields } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateData(schemas.contactAddSchema), ctrl.contactAdd);

router.delete("/:id", ctrl.deleteById);

router.put("/:id", validateOnFields(schemas.contactAddSchema), ctrl.updateById);

module.exports = router;

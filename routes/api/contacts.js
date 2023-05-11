const express = require("express");
const ctrl = require("../../controllers/contacts");
const {
  validateData,
  validateFavorite,
  isValidId,
  authenticate,
} = require("../../middlewares");
const { schemas } = require("../../models/contacts");
const router = express.Router();

router.use(authenticate);

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateData(schemas.contactAddSchema), ctrl.contactAdd);

router.delete("/:id", isValidId, ctrl.deleteById);

router.put(
  "/:id",
  isValidId,
  validateData(schemas.contactAddSchema),
  ctrl.updateById
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateFavorite(schemas.updateSchema),
  ctrl.updateFavorite
);

module.exports = router;

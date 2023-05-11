const { validateData } = require("./validateData");
const { validateFavorite } = require("./validateData");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
module.exports = {
  validateData,
  isValidId,
  validateFavorite,
  authenticate,
};

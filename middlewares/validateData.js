const { HttpError } = require("../helpers");
const validateData = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const field = {};
    console.log(req.body);
    if (JSON.stringify(req.body) === JSON.stringify(field)) {
      next(HttpError(400, "missing fields"));
    }
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
  return func;
};
const validateFavorite = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const field = {};
    console.log(req.body);
    if (JSON.stringify(req.body) === JSON.stringify(field)) {
      next(HttpError(400, "missing field favorite"));
    }
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
  return func;
};
module.exports = {
  validateData,
  validateFavorite,
};

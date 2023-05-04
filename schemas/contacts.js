const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": "required name" }),
  email: Joi.string().required().messages({ "any.required": "required email" }),
  phone: Joi.string().required().messages({ "any.required": "required phone" }),
});
module.exports = {
  contactAddSchema,
};

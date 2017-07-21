const _ = require('lodash');
const Joi = require('joi');

const stripTechnicalFields = (object) => {
  const technicalFields = ['__v', '_id'];
  return _.omit(object, technicalFields);
};

const validate = (payload, schema) => {
  const validationResult = Joi.validate(payload, schema);
  if (!validationResult.error) {
    return validationResult.value;
  }

  const error = Error(validationResult.error);
  error.status = 422;

  throw error;
};

module.exports = { stripTechnicalFields, validate };

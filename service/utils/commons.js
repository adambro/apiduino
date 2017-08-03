const _ = require('lodash');
const Joi = require('joi');
const winston = require('winston');
const path = require('path');

require('winston-daily-rotate-file');

const transport = new (winston.transports.DailyRotateFile)({
  filename: path.join(__dirname, '../log/log'),
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: process.env.ENV === 'development' ? 'debug' : 'info',
});

const logger = new (winston.Logger)({
  transports: [
    transport,
    new (winston.transports.Console)(),
  ],
});

const stripTechnicalFields = (object) => {
  const technicalFields = ['__v', '_id', 'updatedAt', 'createdAt'];
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

module.exports = { stripTechnicalFields, validate, logger };

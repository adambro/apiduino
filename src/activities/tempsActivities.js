const Joi = require('joi');

const { daoCreate } = require('../dao/tempsDao');
const { validate } = require('../../utils/commons');

const tempsSchema = Joi.object().keys({
  temp: Joi.number().required(),
});

const create = async (payload) => {
  validate(payload, tempsSchema);
  return daoCreate(payload);
};

module.exports = { create };

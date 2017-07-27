const Joi = require('joi');

const { ormCreate, ormSearch, ormGetStats } = require('../orm/tempsOrm');
const { validate } = require('../../utils/commons');

const tempsSchema = Joi.object().keys({
  temp: Joi.number().required(),
});

const create = async (payload) => {
  validate(payload, tempsSchema);
  return ormCreate(payload);
};

const search = async () => ormSearch();

const getStats = async () => ormGetStats();

module.exports = { create, search, getStats };

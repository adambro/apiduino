const Joi = require('joi');

const { daoCreate, daoSearch, daoGetStats } = require('../dao/tempsDao');
const { validate } = require('../../utils/commons');

const tempsSchema = Joi.object().keys({
  temp: Joi.number().required(),
});

const create = async (payload) => {
  validate(payload, tempsSchema);
  return daoCreate(payload);
};

const search = async () => daoSearch();


const getStats = async () => daoGetStats();

module.exports = { create, search, getStats };

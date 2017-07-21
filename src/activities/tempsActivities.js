const { daoCreate } = require('../dao/tempsDao');

// add joi validation
const create = async payload => daoCreate(payload);

module.exports = { create };

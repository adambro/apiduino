const _ = require('lodash');

const stripTechnicalFields = (object) => {
  const technicalFields = ['__v', '_id'];
  return _.omit(object, technicalFields);
};

module.exports = { stripTechnicalFields };

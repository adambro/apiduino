const { mongoose } = require('./daoInit');

const Schema = mongoose.Schema;

const Temp = mongoose.model('temp', new Schema({}, {
  strict: false,
  timestamps: true,
}));

const daoCreate = async payload => Temp.create(payload);

module.exports = { daoCreate };

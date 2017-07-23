const { mongoose } = require('./daoInit');

const Schema = mongoose.Schema;

const Temp = mongoose.model('temp', new Schema({}, {
  strict: false,
  timestamps: true,
}));

const daoCreate = async payload => Temp.create(payload);

const daoSearch = async () => Temp.find().sort({ _id: -1 }).limit(250);

module.exports = { daoCreate, daoSearch };

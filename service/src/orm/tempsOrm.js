const { mongoose } = require('./ormInit');

const Schema = mongoose.Schema;

const Temp = mongoose.model('temp', new Schema({}, {
  strict: false,
  timestamps: true,
}));

const ormCreate = async payload => Temp.create(payload);

const ormSearch = async () => Temp.find().sort({ _id: -1 }).limit(250);

const ormGetStats = async () => {
  const highest = await Temp.find().sort({ temp: -1 }).limit(1);
  const lowest = await Temp.find().sort({ temp: 1 }).limit(1);
  const newestDate = await Temp.find().sort({ createdAt: -1 }).limit(1);
  const oldestDate = await Temp.find().sort({ createdAt: 1 }).limit(1);

  const stats = {
    highestTemp: highest[0].toObject().temp,
    lowestTemp: lowest[0].toObject().temp,
    newestMeasurement: newestDate[0].toObject().createdAt,
    oldestMeasurement: oldestDate[0].toObject().createdAt,
    totalMeasurements: await Temp.count(),
  };
  return stats;
};

module.exports = { ormCreate, ormSearch, ormGetStats };

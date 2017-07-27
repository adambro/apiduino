const bluebird = require('bluebird');
const mongoose = require('mongoose');

mongoose.Promise = bluebird;

const connectToDb = ({ host, port, dbName }) => {
  mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
};

module.exports = { connectToDb, mongoose };

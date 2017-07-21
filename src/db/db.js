const mongoose = require('mongoose');

const connectToDb = ({ host, port, dbName }) => {
  mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
};

module.exports = { connectToDb };

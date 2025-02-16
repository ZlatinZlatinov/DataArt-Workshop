const mongoose = require('mongoose');
const config = require('./config');

const mongooseInit = async () => {
  try {
    await mongoose.connect(config.dbURL);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = {mongooseInit};
// this file will handle the connection logic to the MongoDb database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://127.0.0.1:27017/dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));

module.exports = { mongoose };

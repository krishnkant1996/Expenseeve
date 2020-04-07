const config =  require('./config');
const mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: 8: '));

mongooseDefaults = {useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(config.dbUrl, mongooseDefaults);

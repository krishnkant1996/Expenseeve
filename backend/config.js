const env = require('./env');
require('dotenv').config();
let dbUrl, port;
if (env.type === 'test') {
    dbUrl = process.env.dbUrl;
    port = process.env.PORT;
} else if (env.type === 'prod') {
    dbUrl = process.env.dbUrl;
    port = process.env.PORT;
} else if (env.type === 'dev') {
    dbUrl = process.env.dbUrl;
    port = process.env.PORT;
} else {
    dbUrl = process.env.dbUrl;
    port = process.env.PORT;
}

module.exports = { dbUrl, port };

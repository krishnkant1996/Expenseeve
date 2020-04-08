const env = require('./env');
require('dotenv').config();
let dbUrl, port;
if (env.type === 'test') {
    dbUrl = process.env.dbUrl;
    port = 3001;
} else if (env.type === 'prod') {
    dbUrl = process.env.dbUrl;
    port = 3002;
} else if (env.type === 'dev') {
    dbUrl = process.env.dbUrl;
    port = 3000;
} else {
    dbUrl = process.env.dbUrl;
    port = 3000;
}

module.exports = { dbUrl, port };

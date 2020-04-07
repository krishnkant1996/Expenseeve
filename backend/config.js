const env = require('./env');

let dbUrl, port;

if (env.type === 'test') {
    dbUrl = 'mongodb+srv://root:root@cluster0-qupud.mongodb.net/test';
    port = 3001;
} else if (env.type === 'prod') {
    dbUrl = 'mongodb+srv://root:root@cluster0-qupud.mongodb.net/test';
    port = 3002;
} else if (env.type === 'dev') {
    dbUrl = 'mongodb+srv://root:root@cluster0-qupud.mongodb.net/test';
    port = 3000;
} else {
    dbUrl = 'mongodb+srv://root:root@cluster0-qupud.mongodb.net/test';
    port = 3000;
}

module.exports = { dbUrl, port };

const app = require('./expressApp');

const server = require('http').Server(app);
require('./routes');

module.exports = server;

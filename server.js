const http = require('http');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 8080;
const server = http.createServer(app);

console.log(`Connecting at port ${port}`);

server.listen(port)
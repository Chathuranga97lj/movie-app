// entry file

// first add dotnev 
require('dotenv').config();

const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// server.listen('5000');
// server.on('listening', () => {
//     console.log('Server is listening now');
// });

// set listen using call back 
server.listen(process.env.PORT, () => {
    console.log(`Server is listening now on ${process.env.PORT} `);
});
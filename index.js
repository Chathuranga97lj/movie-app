// entry file
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// server.listen('5000');
// server.on('listening', () => {
//     console.log('Server is listening now');
// });

// set listen using call back 
server.listen('5000', () => {
    console.log('Server is listening now');
});
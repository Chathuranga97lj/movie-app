const express = require('express'); 
const {logger} = require('./configuration')
const middleware = require('./middlewares');
const routes = require('./routes');

const app = express();

process.on('unhandledRejection', (reason) => {
    logger.error(reason);
    process.exit(1);
});

middleware(app); // remove midlewares and deploy seperatly

// // middlewares
// app.use((req, res, next) => {
//     console.log(req.ip);
//     next(); // pass req in middleware to routers
// });

// routes
routes(app);

module.exports = app;
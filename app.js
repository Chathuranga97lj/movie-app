const express = require('express'); 
const {logger} = require('./configuration');
const createError = require('http-errors');
const {middleware} = require('./middlewares');
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

// not found handler
app.use((req, res, next) => {
    const error = createError(404);
    next(error); // send errors to global error handler
    //console.log(error.message);
    // res.status(error.statusCode).send(error.message);
});

// global error handler
app.use((error, req, res, next) => {
    logger.error(error.message);

    res.statusCode = error.statusCode;
    res.json({
        message: error.message
    });
});

module.exports = app;
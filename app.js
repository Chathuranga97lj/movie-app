const express = require('express');
const middleware = require('./middlewares');

const app = express();

middleware(app); // remove midlewares and deploy seperatly

// // middlewares
// app.use((req, res, next) => {
//     console.log(req.ip);
//     next(); // pass req in middleware to routers
// });

// routes
app.get('/', (req, res, next) => {
    // normal respons
    // res.status(200).send('Welcome to the Home Page');

    // json response
    // res.json({
    //     message: "welcome to the home page"
    // })

    // redirect some another path
    res.send('Welcome to homepage');
});

app.get('/user/:id/:postId', (req, res, next) => {
    //console.log(req.query); // /10?comment=first  after the ? part in url /  &like=first
    //console.log(req.params); // http://localhost:5000/user/1/10  -- after user/ the sections called params like /1/10
    const host = req.get('Host');
    console.log(host);
    res.status(200).send('Welcome to the user page in nodemon');
})

module.exports = app;
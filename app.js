const express = require('express');

const app = express();

// routes
app.get('/', (req, res, next) => {
    // normal respons
    // res.status(200).send('Welcome to the Home Page');

    // json response
    // res.json({
    //     message: "welcome to the home page"
    // })

    // redirect some another path
    res.redirect('/user')
});

app.get('/user', (req, res, next) => {
    res.status(200).send('Welcome to the user page');
})

module.exports = app;
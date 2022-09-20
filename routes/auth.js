const {Router} = require('express');

const router = Router();

router
    .get('/login', (req, res, next) => {
        res.send('Welcome to Loggin Page !');
    })
    .post('/login')
    .get('/signup')
    .post('/signup')

module.exports = router;  
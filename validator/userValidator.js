const Joi = require('@hapi/joi');

// password reg
//Minimum eight characters, at least one letter and one number:
//"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

const schema = Joi.object({
    username: Joi.string().alphanum().required().min(3).max(10),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
        new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')
    ).required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required()    
});

module.exports = schema; 
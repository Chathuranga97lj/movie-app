const {dbCon} = require('../configuration');
const {userValidator} = require('../validator');

class User {
    constructor(userData) {
        this.userData = {...userData};
    };

    save() {
        dbCon('users', (db) => {
            db.insertOne(this.userData);
        });
    }

    static validate(userData) {
        const result = userValidator.validate(userData);
        console.log(result);
    }  
};

const userData = {
    username: 'chathuranga',
    email: 'chathuit97@gmail.com',
    password: 'chathu123',
    first_name: 'chathu',
    last_name: 'jaya'
};

User.validate(userData);
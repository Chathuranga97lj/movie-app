const {dbCon} = require('../configuration');

class User {
    constructor(userData) {
        this.userData = {...userData};
    };

    save() {
        dbCon('users', (db) => {
            db.insertOne(this.userData);
        });
    }
};

const user = new User({
    username: 'chathuranga',
    email: 'chathuit97@gmail.com',
    password: 'chathu123',
    first_name: 'chathu',
    last_name: 'jaya'
});

user.save();
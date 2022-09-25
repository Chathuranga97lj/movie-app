const {dbCon} = require('../configuration');
const {userValidator} = require('../validator');

class User {
    constructor(userData) {
        this.userData = {...userData};
    };

    save(cb) {
        dbCon('users', async(db) => {
            try{
                await db.insertOne(this.userData);
                cb();
            }catch(err){
                cb(err);
            }
        });
    }

    checkExistence(){
        return new Promise((resolve, reject) => {
            dbCon('users', async(db) => {
                try{
                    const user = await db.findOne({'$or':[{username: this.userData['username']}, 
                    {email: this.userData['email']}]});

                    if(!user) {
                        resolve({
                            check: false,
                            message: 'user not added!'
                        })
                    } else if(this.userData['username'] === user.username){
                        resolve({
                            check: true,
                            message: 'this user name is already in use!'
                        })
                    } else if(this.userData['email'] === user.email){
                        resolve({
                            check: true,
                            message: 'this email is already in use'
                        })
                    }
                }catch(err){
                    reject(err);
                }
            })
        })
    }

    static validate(userData) {
        const result = userValidator.validate(userData);
        //console.log(result.error.message);
        return result;
    }  
};

// const user = new User({
//     username: 'chathu97',
//     email: 'chathuit97@gmail.com',
//     password: 'Chathu123#',
//     first_name: 'chathu',
//     last_name: 'jaya'
// });

// user.checkExistence()
//     .then(check => {
//         console.log(check);
//     })
//     .catch(err => console.log(err));

// const validation = User.validate(userData);

module.exports = User;
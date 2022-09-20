const {MongoClient} = require('mongodb');

const _uri = 'mongodb+srv://shop-user:32706189@cluster0.rbwuf5l.mongodb.net/sample_mflix?retryWrites=true&w=majority'

const dbCon = (coll, cb) => {
    MongoClient.connect(_uri)
        .then(async client => {
            const db = client.db('sample_mflix').collection(coll);
            await cb(db);
            client.close();
        })
        .catch()
};

module.exports = dbCon;
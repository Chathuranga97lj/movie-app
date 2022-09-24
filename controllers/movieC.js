const {dbCon} = require('../configuration');
const {ObjectId} = require('bson');
const createError = require('http-errors');

const getMovies = (req, res, next) => {
    // res.send('wait for movies');
    const pageNum = parseInt(req.params.page);
    if(isNaN(pageNum)){
        // return res.status(400).send('bad request');
    
        return next(createError(400)); // handle error in global error handler
    }

    const moviesToSkip = (pageNum -1)*10;

    dbCon('movies', async(db) => {
        try {
            const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
            res.json(movies);
        } catch(err) {
            //return res.status(500).send('Internal Server Error');
            return next(createError(500));
        }
        
    })
};

    const getOneMovie = (req, res, next) => {
        if(!ObjectId.isValid(req.params.id)) {
            //return res.status(400).send('bad request');
            return next(createError(400));
        }
        const _id = new ObjectId(req.params.id);
        dbCon('movies', async (db) => {
            try{
                const movie = await db.findOne({_id});
                if(!movie){
                    //return res.status(404).send('Not Found');
                    return next(createError(404));
                } 
                res.json(movie);
            } catch(err) {
                //return res.status(500).send('Internal Server Error');
                return next(createError(500));
            }
        });
    };

module.exports = {
    getMovies,
    getOneMovie
}
const jokeModel = require('../models/jokeModel');

exports.getFavoritesPage = (req, res) => {
       
   jokeModel.getjokefromfav().then((data)=>{
     return res.status(200).json(data);
   })
    // res.sendFile('views/favorites.html', { root: __dirname + '/../' });
};

exports.addToFavorites = (req, res) => {
    const jokeData = req.body;
    jokeModel.addJokeToFavorites(jokeData)
        .then(() => res.status(200).json({ message: 'Joke added to favorites' }))
        .catch(error => res.status(500).json({ message: error.message }));
};

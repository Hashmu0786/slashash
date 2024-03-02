const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hashmu@8130',
    database: 'jokes_db'
 
});

db.connect();

exports.getjokefromfav = () => {
    return new Promise((resolve, reject) => {
        const query = `select * from favourites;`;
        db.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });    
}
exports.addJokeToFavorites = (jokeData) => {
    return new Promise((resolve, reject) => {
        const { jokeId, jokeText } = jokeData;
        const query = `INSERT INTO favourites  (joke_id, joke) VALUES (?, ?)`;
        db.query(query, [jokeId, jokeText], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

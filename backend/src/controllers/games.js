const gameData = require('../data/game-data.json');

const getGames = (req, res) => {
    res.json(gameData);
};

const searchGames = (req, res) => {
    const query = req.query.q?.toLowerCase();
    const filteredGames = gameData.filter((game) =>
        game.title.toLowerCase().includes(query)
    );
    res.json(filteredGames);
};

module.exports = { getGames, searchGames };

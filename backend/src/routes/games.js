const express = require('express');
const { getGames, searchGames } = require('../controllers/games');

const router = express.Router();

router.get('/', getGames); // Fetch all games
router.get('/search', searchGames); // Search games

module.exports = { gamesRoutes: router };

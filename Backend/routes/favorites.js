const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.get('/', favoritesController.getFavoritesPage);
router.post('/add', favoritesController.addToFavorites);

module.exports = router;

const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.get('/wishlist/:id/wish/:wishId', wishesController.getWishById);

module.exports = router;
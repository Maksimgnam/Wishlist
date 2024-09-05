const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.post('/add-wishlist', wishesController.addWishList)

module.exports = router;
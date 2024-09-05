const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.get('/wishlists', wishesController.getAllWishLists)

module.exports = router;
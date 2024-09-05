const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.put('/book/wishlist/:id/wish/:wishId', wishesController.bookWish)

module.exports = router;
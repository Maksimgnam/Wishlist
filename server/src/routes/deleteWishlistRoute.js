const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')

router.delete('/delete-wishlist/:id',wishesController.deleteWishlistById);

module.exports = router;
const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')

router.delete('/delete-wish/:id/:wishId',wishesController.deleteWishById);

module.exports = router;
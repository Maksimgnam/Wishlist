const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.get('/wishes/:id', wishesController.getAllWishesById)

module.exports = router;
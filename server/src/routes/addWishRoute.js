const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishes.controller')


router.post('/add-wish/:id', wishesController.addWish)

module.exports = router;
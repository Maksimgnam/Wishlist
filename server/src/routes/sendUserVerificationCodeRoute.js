const express = require('express');
const router = express.Router();
const sendController = require('../controllers/send.controller');

router.post('/send-userCode',sendController.sendEmailTo);

module.exports = router;
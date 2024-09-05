
// const express = require('express');
// const router = express.Router();
// const sendEmail = require('../controllers/send.controller');


// router.post('/send-email', async (req, res) => {
//     const { to, subject, text } = req.body;

//     try {
//         let info = await sendEmail(to, subject, text);
//         res.status(200).json({ message: 'Email sent', info: info });
//     } catch (error) {
//         res.status(500).json({ message: 'Error sending email', error: error });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const sendController = require('../controllers/send.controller');

router.post('/send',sendController.sendEmail);

module.exports = router;

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controllers');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');



router.post('/addTrain', apiKeyMiddleware.verifyApiKey, adminController.addTrain);
router.put('/update-seats/:trainId', apiKeyMiddleware.verifyApiKey, adminController.updateTrainSeats);


module.exports = router;

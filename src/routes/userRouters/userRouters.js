const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/newWebsitelink', userController.getAllWebsiteStatus);
router.post('/newWebsitelink', userController.createWebsite);
router.get('/history/:websiteId', userController.getWebsiteHistory);

module.exports = router;

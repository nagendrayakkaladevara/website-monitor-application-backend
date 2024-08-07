const express = require('express');
const router = express.Router();

// Import other route files
const userRoutes = require('./userRouters/userRouters');

router.use('/users', userRoutes);
 
module.exports = router;

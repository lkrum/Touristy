const router = require('express').Router();
const userRoutes = require('../api/userRoutes');

// Add api routes below
router.use('/users', userRoutes);

module.exports = router;

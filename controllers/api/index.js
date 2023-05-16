const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const tripRoutes = require('../api/tripRoutes');

// Add api routes below
router.use('/users', userRoutes);
router.use('/trip', tripRoutes);

module.exports = router;

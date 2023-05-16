// required API routes
const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const tripRoutes = require('../api/tripRoutes');
const imageRoutes = require('../api/imageRoutes');
const postRoutes = require('../api/postRoutes');

// Add api routes below
router.use('/users', userRoutes);
router.use('/trip', tripRoutes);
router.use('/image', imageRoutes);
router.use('/post', postRoutes);

module.exports = router;

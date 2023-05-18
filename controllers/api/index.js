// required API routes
const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const tripRoutes = require('../api/tripRoutes');
const imageRoutes = require('../api/imageRoutes');
const blogRoutes = require('../api/blogRoutes');

// Add api routes below
router.use('/users', userRoutes);
router.use('/trip', tripRoutes);
router.use('/image', imageRoutes);
router.use('/blog', blogRoutes);

module.exports = router;

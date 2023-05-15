const router = require('express').Router();
const userRoutes = require('./user-routes');


// Add api routes below
router.use('/post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;

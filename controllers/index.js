// required files
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const tripRoutes = require('./tripRoutes');


// initiating routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/trip', tripRoutes);

module.exports = router;

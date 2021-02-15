const router = require('express').Router();

// homeRoutes
// const homeRoutes = require('./home-routes.js');
// router.use('/', homeRoutes);

// api routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
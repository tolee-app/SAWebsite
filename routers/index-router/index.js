const {Router} = require('express');
const router = Router();

const indexController = require('../../controllers/index-controller');

router.get('/', indexController.serveIndexPage);
router.use('/blogs', require('../blogs-router'));
router.use('/team', require('../team-router'));

module.exports = router;

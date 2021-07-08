const {Router} = require('express');
const router = Router();

const indexController = require('../../controllers/index-controller');

router.use('/blogs', require('../blogs-router'));
router.use('/team', require('../team-router'));
router.get('/privacy', indexController.servePrivacyPage);
router.get('/terms',indexController.serveTermsPage);
router.get('/', indexController.serveIndexPage);

module.exports = router;

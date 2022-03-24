const {Router} = require('express');
const router = Router();

const indexController = require('../../controllers/index-controller');

router.use('/team', require('../team-router'));
router.use('/crowdfund', require('../crowdfund-router'));
router.get('/privacy', indexController.servePrivacyPage);
router.get('/terms',indexController.serveTermsPage);
router.get('/', indexController.serveIndexPage);

router.all('*', (_, res) => res.redirect('/'));

module.exports = router;

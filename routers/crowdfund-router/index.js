const {Router} = require('express');
const router = Router();

const crowdfundController = require('../../controllers/crowdfund-controller');

router.get('/', crowdfundController.serveCrowdfundIndex);
router.get('/campaign/:id', crowdfundController.serveDetailedCrowdfundCampaign);

module.exports = router;

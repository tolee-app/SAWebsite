const {Router} = require('express');
const router = Router();

router.get('/campaign-guildeline', require('../../controllers/mobile-controller').serveCampaignGuidelinesPage);
module.exports = router;

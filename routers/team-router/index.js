const {Router} = require('express');
const router = Router();

const teamController = require('../../controllers/team-controller');

router.get('/', teamController.serveTeamsIndex);

module.exports = router;

const CrowdfundAPI = require('../../data-sources/crowdfund-api');


module.exports.serveCrowdfundIndex = function (req, res) {

	CrowdfundAPI.getAllCampaigns()
		.then(campaigns => {
			res.render(
				'crowdfunding-landing-page',
				{
					campaigns: campaigns
				}
			);
		})
		.catch(err => {
			res.status(500).send('');
		});

};


module.exports.serveDetailedCrowdfundCampaign = function (req, res) {

	const campaignId = req.params['id'];

	CrowdfundAPI.getDetailedCampaign(campaignId)
		.then(campaign => {
			res.render(
				'crowdfunding-detailed-campaign',
				{
					campaign: campaign
				}
			);
		})
		.catch(err => {
			res.status(500).send('');
		});

};

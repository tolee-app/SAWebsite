const CrowdfundAPI = require('../../data-sources/crowdfund-api');
const Utils = require('./utils');

module.exports.serveCrowdfundIndex = function (req, res) {

	CrowdfundAPI.getAllCampaigns()
		.then(campaigns => {
			res.render(
				'crowdfunding-landing-page',
				{
					campaigns: campaigns,
					calculateAgeFromDob: Utils.calculateAgeFromDob,
					calculatePercentage: Utils.calculatePercentage,
					calculatePercentageStr: Utils.calculatePercentageStr,
					calculateDaysLeftFromDate: Utils.calculateDaysLeftFromDate,
				}
			);
		})
		.catch(err => {
			console.error(err);
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
					campaign: campaign,
					calculateAgeFromDob: Utils.calculateAgeFromDob,
					calculatePercentage: Utils.calculatePercentage,
					calculatePercentageStr: Utils.calculatePercentageStr,
					calculateDaysLeftFromDate: Utils.calculateDaysLeftFromDate,
				}
			);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send('');
		});

};

const fetch = require('node-fetch');
const baseUrl = require('../../config').crowdfundApiConf.baseUrl;

module.exports.getAllCampaigns = async function () {
	let res = await fetch(
		baseUrl + '/api/campaign'
	);
	res = res.json();
	return res;
};

module.exports.getDetailedCampaign = async function (campaignId) {
	let res = await fetch(
		baseUrl + '/api/campaign?id=' + campaignId
	);
	res = res.json();
	return res;
};

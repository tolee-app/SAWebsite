const baseApiUrl = require('../../config').crowdfundApiConf.baseUrl;
const fetch = require('node-fetch');

module.exports.getAllCampaigns = async function () {

	let response = await fetch(
		`${baseApiUrl}/api/campaign`,
		{
			method: 'get'
		}
	);

	response = response.json();
	return response;

};


module.exports.getCampaignDetails = async function (campaignId) {

	let response = await fetch(
		`${baseApiUrl}/api/campaign?id=${campaignId}`,
		{
			method: 'get'
		}
	);

	response = response.json();
	return response;
	
};

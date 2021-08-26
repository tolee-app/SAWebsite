
module.exports.serveCampaignGuidelinesPage = function (req, res) {

	if(req.query['lang'] === 'hi') {
		res.render(
			'mobile/campaign-guidelines-hi.html'
		);
		return;
	}

	res.render(
		'mobile/campaign-guidelines-en.html'
	);

};

const TeamDataSource = require('../../data-sources/teams-data');

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.serveIndexPage = function (req, res) {

	res.render(
		'index',
		{
			coreTeamMembers: TeamDataSource.getCoreTeamMembers()
		}
	);

};


/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.servePrivacyPage = function (req, res){
	res.render(
		'privacy',
		{}
	);
};


/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.serveTermsPage = function (req, res){
	res.render(
		'terms',
		{}
	);
};

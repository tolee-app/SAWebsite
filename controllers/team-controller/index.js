const TeamDataSource = require('../../data-sources/teams-data');

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.serveTeamsIndex = function (req, res) {
	res.render(
		'team',
		{
			teamMembers: TeamDataSource.getAllTeamMembers()
		}
	);
};

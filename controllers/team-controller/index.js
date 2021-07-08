/**
 * @typedef TeamMemberModel
 * @type {Object}
 *
 * @property {string} name Name of member
 * @property {string} profilePicUrl Profile picture of member
 * @property {string} designation Designation of member
 * @property {string} linkedInProfileUrl Url of linkedin profile of member
 */

/**
 *
 * @type {Array<TeamMemberModel>}
 *
 * */

const coreTeamMembers = [
	{
		name: 'Abc',
		profilePicUrl: 'https://google.com',
		designation: 'HOD',
		linkedInProfileUrl: 'https://linkedin.com/in/'
	},
];

const teamMembers = [
	...coreTeamMembers,
	{
		name: 'Abc',
		profilePicUrl: 'https://google.com',
		designation: 'HOD',
		linkedInProfileUrl: 'https://linkedin.com/in/'
	},
];


module.exports.getCoreTeamMembers = function () {
	return coreTeamMembers;
};

/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 */
module.exports.serveTeamsIndex = function (req, res) {
	res.render(
		'team',
		{
			teamMembers: teamMembers
		}
	);
};

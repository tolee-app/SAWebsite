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
const teamMembers = [
	{
		name: 'Abc',
		profilePicUrl: 'https://google.com',
		designation: 'HOD',
		linkedInProfileUrl: 'https://linkedin.com/in/'
	},
];


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

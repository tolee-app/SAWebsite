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
 * @type {TeamMemberModel[]}
 */
const coreTeamMembers = [
	{
		name: 'Shashank Mishra',
		profilePicUrl: '/assets/member1.jpg',
		designation: 'Founder & CEO',
		linkedInProfileUrl: 'https://www.linkedin.com/in/shankmishra/',
	},
	{
		name: 'Mohit Yadav',
		profilePicUrl: '/assets/Mohit.png',
		designation: 'Head of Operations',
		linkedInProfileUrl: 'https://www.linkedin.com/in/mohit-yadav-17b550115/',
	},
	{
		name: 'Himanshu Nain',
		profilePicUrl: '/assets/Himanshu.png',
		designation: 'Head of Technology',
		linkedInProfileUrl: 'https://www.linkedin.com/in/himanshu-nain/',
	},
	{
		name: 'Prashant Chandra',
		profilePicUrl: '/assets/member4.jpg',
		designation: 'Head of Sales',
		linkedInProfileUrl: 'https://www.linkedin.com/in/prashant-chandra-096174147/',
	},
	{
		name: 'Deepak Kadian',
		profilePicUrl: '/assets/member5.jpg',
		designation: 'Head of Design',
		linkedInProfileUrl: 'https://www.linkedin.com/in/deepak-kadian-809412175',
	}
];


/**
 *
 * @type {TeamMemberModel[]}
 */
const allTeamMembers = [
	...coreTeamMembers,
	{
		name: 'Amit Nair',
		profilePicUrl: '/assets/whole%20team/Amit.png',
		designation: 'Senior Marketing Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/MAmitNair',
	},
	{
		name: 'Md. Mozib',
		profilePicUrl: '/assets/whole%20team/Mozib.png',
		designation: 'Graphic Designer',
		linkedInProfileUrl: 'https://www.linkedin.com/in/md-mozib-783165162/',
	},
	{
		name: 'Harshit Bansal',
		profilePicUrl: '/assets/whole%20team/Harshit.png',
		designation: 'Associate Operations Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/harshit-bansal-026652156/',
	},
	{
		name: 'Ipsita Chhabra',
		profilePicUrl: '/assets/whole%20team/IPSITA.png',
		designation: 'Business Development (Sales)',
		linkedInProfileUrl: 'https://www.linkedin.com/in/ipsita-chhabra-330a43161/',
	},
	{
		name: 'Rishabh Harish',
		profilePicUrl: '/assets/whole%20team/Rishabh.png',
		designation: 'SDE (Android)',
		linkedInProfileUrl: 'https://www.linkedin.com/in/rishabh-harish/',
	},
];

/**
 *
 * @return {TeamMemberModel[]}
 */
module.exports.getCoreTeamMembers = () => {
	return coreTeamMembers;
};

/**
 *
 * @return {TeamMemberModel[]}
 */
module.exports.getAllTeamMembers = () => {
	return allTeamMembers;
};

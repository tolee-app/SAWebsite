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
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-shashank.jpg',
		designation: 'Founder & CEO',
		linkedInProfileUrl: 'https://www.linkedin.com/in/shankmishra/',
	},
	{
		name: 'Mohit Yadav',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-mohit.png',
		designation: 'Head of Operations',
		linkedInProfileUrl: 'https://www.linkedin.com/in/mohit-yadav-17b550115/',
	},
	{
		name: 'Himanshu Nain',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-himanshu.jpeg',
		designation: 'Head of Technology',
		linkedInProfileUrl: 'https://www.linkedin.com/in/himanshu-nain/',
	},
	{
		name: 'Prashant Chandra',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-prashant.jpg',
		designation: 'Head of Sales',
		linkedInProfileUrl: 'https://www.linkedin.com/in/prashant-chandra-096174147/',
	},
	{
		name: 'Deepak Kadian',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-deepak.jpg',
		designation: 'Head of Design',
		linkedInProfileUrl: 'https://www.linkedin.com/in/deepak-kadian-809412175',
	},
	{
		name: 'Amit Nair',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/marketing-amit.png',
		designation: 'Senior Marketing Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/MAmitNair',
	},
];


/**
 *
 * @type {TeamMemberModel[]}
 */
const allTeamMembers = [
	...coreTeamMembers,
	{
		name: 'Vikas Dhale',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/hr-vikas.jpg',
		designation: 'Sr. Manager - HRBP',
		linkedInProfileUrl: 'https://www.linkedin.com/in/vikas-dhale/',
	},
	{
		name: 'Rishabh Harish',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/tech-rishabh.png',
		designation: 'SDE (Android)',
		linkedInProfileUrl: 'https://www.linkedin.com/in/rishabh-harish/',
	},
	{
		name: 'Ipsita Chhabra',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/sales-ipsita.png',
		designation: 'Business Development (Sales)',
		linkedInProfileUrl: 'https://www.linkedin.com/in/ipsita-chhabra-330a43161/',
	},
	{
		name: 'Harshit Bansal',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-harshit.png',
		designation: 'Associate Operations Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/harshit-bansal-026652156/',
	},
	{
		name: 'Saransh Goswami',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-saransh.jpg',
		designation: 'Product Operations Manager - Content',
		linkedInProfileUrl: 'https://www.linkedin.com/in/saransh-goswami-17043b106/',
	},
	{
		name: 'Mansi Rawat',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-mansi.jpg',
		designation: 'Operations Associate',
		linkedInProfileUrl: 'https://www.linkedin.com/in/mansi-rawat-8a66b5145/',
	},
	{
		name: 'Praveen Minj',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-praveen.jpg',
		designation: 'Operations Intern',
		linkedInProfileUrl: 'https://www.linkedin.com/in/praveen-minj-b78900131/\n',
	},
	{
		name: 'Md. Mozib',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/design-mozib.png',
		designation: 'Graphic Designer',
		linkedInProfileUrl: 'https://www.linkedin.com/in/md-mozib-783165162/',
	},
	{
		name: 'Drishti Mago',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/design-drishti.jpg',
		designation: 'Motion Graphics & Video Editor Intern',
		linkedInProfileUrl: 'https://www.linkedin.com/in/drishti-mago-a95a10200/',
	},
	{
		name: 'Alamjot Bedi',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/design-alamjot.jpg',
		designation: 'Motion Graphics & Video Editor Intern',
		linkedInProfileUrl: 'https://www.linkedin.com/in/alamjot-singh-228953179/',
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

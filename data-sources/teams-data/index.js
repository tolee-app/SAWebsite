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
		designation: 'Head of Engineering',
		linkedInProfileUrl: 'https://www.linkedin.com/in/himanshu-nain/',
	},
	{
		name: 'Prashant Chandra',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-prashant.jpg',
		designation: 'Head of Revenue',
		linkedInProfileUrl: 'https://www.linkedin.com/in/prashant-chandra-096174147/',
	},
	{
		name: 'Deepak Kadian',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/core-deepak.jpg',
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
		name: 'Vikas Dhale',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/hr-vikas.jpg',
		designation: 'Sr. Manager - HRBP',
		linkedInProfileUrl: 'https://www.linkedin.com/in/vikas-dhale/',
	},
	{
		name: 'Raveena Rajput',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/hr-raveena.jpg',
		designation: 'HR Associate',
		linkedInProfileUrl: 'https://www.linkedin.com/in/raveena-rajput-8489861a1/',
	},
	{
		name: 'Rishabh Harish',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/tech-rishabh.png',
		designation: 'Software Engineer (Android)',
		linkedInProfileUrl: 'https://www.linkedin.com/in/rishabh-harish/',
	},
	{
		name: 'Ipsita Chhabra',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/sales-ipsita.png',
		designation: 'Sr. Sales Associate',
		linkedInProfileUrl: 'https://www.linkedin.com/in/ipsita-chhabra-330a43161/',
	},
	{
		name: 'Anshula Srivastava',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/finance-anshula.png',
		designation: 'Manager - Finance & Costing',
		linkedInProfileUrl: 'https://www.linkedin.com/in/anshula-srivastava-b40841193/',
	},
	{
		name: 'Rupkatha Chatterjee',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/marketing-rupkatha.png',
		designation: 'Marketing Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/rupkatha-chatterjee-54b1aa140/',
	},
	{
		name: 'Harshit Bansal',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-harshit.png',
		designation: 'Operations Manager',
		linkedInProfileUrl: 'https://www.linkedin.com/in/harshit-bansal-026652156/',
	},
	{
		name: 'Saransh Goswami',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-saransh.jpg',
		designation: 'Product Operations Manager - Content',
		linkedInProfileUrl: 'https://www.linkedin.com/in/saransh-goswami-17043b106/',
	},
	{
		name: 'Praveen Minj',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-praveen.jpg',
		designation: 'Operation Associate - Support and Verification',
		linkedInProfileUrl: 'https://www.linkedin.com/in/praveen-minj-b78900131/',
	},
	{
		name: 'Arjun Arora',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/ops-arjun.jpg',
		designation: 'Operation Associate - Content',
		linkedInProfileUrl: 'https://www.linkedin.com/in/arjun-arora-949474163',
	},
	{
		name: 'Md. Mozib',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/design-mozib.png',
		designation: 'Sr. Graphic Designer',
		linkedInProfileUrl: 'https://www.linkedin.com/in/md-mozib-783165162/',
	},
	{
		name: 'Sipra Das',
		profilePicUrl: 'https://cdn.sportsapp.co.in/2021/public/assets/team/design-sipra.png',
		designation: 'UX/UI Designer',
		linkedInProfileUrl: 'https://www.linkedin.com/in/sipra-das-8a5478199/',
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

'use strict';
const environment = process.env;

const nodeEnv = environment['NODE_ENV'] || 'development';

module.exports = {
	isDebug: nodeEnv !== 'production',
	projectConf: {
		projectId: 'sa-website',
		projectName: 'SportsApp Website',
		projectVersion: '2022.1.1',
		projectVersionCode: 3,
	},
	serverConf: {
		port: 8000,
	},
	crowdfundApiConf: {
		baseUrl: String(environment['ENV_CROWDFUND_API_URL']),
	},
	blogsApiConf: {
		baseUrl: String(environment['ENV_BLOGS_API_URL']),
	}
};

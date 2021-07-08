const environment = process.env;

const nodeEnv = environment['NODE_ENV'] || 'development';

module.exports = {
	isDebug: nodeEnv !== 'production',
	projectConf: {
		projectId: 'sa-website',
		projectName: 'SportsApp Website',
		projectVersion: '2021.07.01',
		projectVersionCode: 1,
	},
	serverConf: {
		host: String(environment['ENV_SA_WEB_HOST']),
		port: Number(environment['ENV_SA_WEB_PORT']),
	}
};
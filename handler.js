/* 'use strict';

const { getApp } = require('./src/controller/appController');
const {
	getTokenGithub,
	getDataByGitHub,
	getUser,
} = require('./src/controller/userController');

module.exports.hello = async (event) => {
	if (event.type === 'login') {
		const response = await getUser(event.user);
		return response;
	} else if (event.type === 'app') {
		const response = await getApp(event.dataApp);
		return response;
	} else if (event.type === 'getTokenGithub') {
		const response = await getTokenGithub(event.dataGithub);
		return response;
	} else if (event.type === 'getDataByGitHub') {
		const response = await getDataByGitHub(event.dataGithub);
		return response;
	} else {
		return {
			status: 400,
			message: 'Error',
		};
	}
}; */
'use strict';
const app = require('./src/index');
const serverless = require('serverless-http');

module.exports.hello = serverless(app);

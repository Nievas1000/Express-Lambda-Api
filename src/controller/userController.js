const { default: axios } = require('axios');
const { encrypt } = require('../Helpers/handleBcrypt');
const userModel = require('../model/userModel');
// require('dotenv').config();

exports.getUser = async (req, res) => {
	const userName = req.body.email;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const user = await userModel.getUser(userName);
	console.log(user);
	if (user.body.length > 0) {
		res.send({ status: user.statusCode, user: user.body[0] });
	} else {
		const response = await this.createUser(userName, firstName, lastName);
		res.send(response);
	}
};

exports.createUser = async (userName, firstName, lastName) => {
	const encryptFirstName = await encrypt(firstName);
	const encryptLastName = await encrypt(lastName);
	const date = new Date();
	const dateNow = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
		-2
	)}-${('0' + date.getDate()).slice(-2)}`;
	const userApplicationKey = Math.random().toString(36).substring(2);
	const user = await userModel.createUser(
		userName,
		encryptFirstName,
		encryptLastName,
		dateNow,
		dateNow,
		userApplicationKey
	);
	console.log(user);
	if (user) {
		return user.statusCode;
	} else {
		return { message: 'User not found' };
	}
};

exports.getTokenGithub = async (req, res) => {
	try {
		const response = await axios.post(
			`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}`
		);
		const start = response.data.indexOf('=');
		const end = response.data.indexOf('&');
		const data = response.data.substring(start + 1, end);
		res.send(data);
	} catch (error) {
		res.send(error);
	}
};

exports.getDataByGitHub = async (req, res) => {
	try {
		const response = await axios.get('https://api.github.com/user', {
			headers: {
				Authorization: req.get('Authorization'),
			},
		});
		const data = response.data;
		res.send(data);
	} catch (error) {
		res.send(error);
	}
};

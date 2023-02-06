const { default: axios } = require('axios');
const hash = require('object-hash');
const { encrypt } = require('../Helpers/handleBcrypt');
const userModel = require('../model/userModel');
/* require('dotenv').config(); */

// Recibimos datos del usuario, consultamos en la base de datos si existe el usuario, si no existe lo registramos y actualizamos el last_login
exports.getUser = async (req, res) => {
	const userName = req.body.email;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const user = await userModel.getUser(userName);
	console.log(user);
	if (user.body.length > 0) {
		const date = new Date();
		const dateNow = `${date.getFullYear()}-${(
			'0' +
			(date.getMonth() + 1)
		).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
		await userModel.updateLastLogin(userName, dateNow);
		res.json({ status: 200, message: user.body[0] });
	} else {
		if (userName) {
			const response = await this.createUser(userName, firstName, lastName);
			res.json({ status: response.statusCode, message: response.body[0] });
		} else {
			res.status(502).json({ message: 'Internal server error' });
		}
	}
};

// Pasos necesarios para registrar un usuario(fecha de creacion, encryptacion, creacion de user_pk)
exports.createUser = async (userName, firstName, lastName) => {
	const encryptFirstName =
		firstName === undefined || firstName === null
			? null
			: await encrypt(firstName);
	const encryptLastName =
		lastName === undefined || lastName === null
			? null
			: await encrypt(lastName);
	const date = new Date();
	const dateNow = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
		-2
	)}-${('0' + date.getDate()).slice(-2)}`;

	const userApplicationKey = `c6j${hash.MD5(
		`${userName}${dateNow}This_is_Salt`
	)}`;

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
		return user;
	} else {
		return { message: 'User not found' };
	}
};

// Obtenemos token de github en base a credenciales del usuario y la empresa
exports.getTokenGithub = async (req, res) => {
	try {
		const response = await axios.post(
			`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}`
		);
		const start = response.data.indexOf('=');
		const end = response.data.indexOf('&');
		const data = response.data.substring(start + 1, end);
		res.send({ data });
	} catch (error) {
		res.send({ message: 'Cannot access to token' });
	}
};

// Obtenemos datos del usuario proporsionados por github en base al token obtenido anteriormente
exports.getDataByGitHub = async (req, res) => {
	try {
		const response = await axios.get('https://api.github.com/user', {
			headers: {
				Authorization: req.get('Authorization'),
			},
		});
		const data = response.data;
		res.send({ data });
	} catch (error) {
		res.send({ message: 'Cannot get data to user' });
	}
};

exports.getUserToApp = async (req, res) => {
	if (req.body.code) {
		const code = req.body.code;
		const user = await userModel.getUserToApp(code);
		if (user.body.length > 0) {
			res.json({ status: 200, message: 'User exist!' });
		} else {
			res.status(400).json({ message: 'User doesnt exist' });
		}
	} else {
		res.status(400).json({ message: 'Incorrect body.' });
	}
};

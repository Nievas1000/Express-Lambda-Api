const { default: axios } = require('axios');
/* require('dotenv').config(); */

// Consulta para obtener un usuario de la DB
exports.getUser = async (email) => {
	const query = {
		query: `SELECT User_name,First_name,Last_name,Create_date,Last_login, USER_APPLICATION_KEY FROM users WHERE User_name = '${email}'`,
	};
	try {
		const response = await axios.post(process.env.URL_DB, query, {
			headers: {
				'x-api-key': process.env.TOKEN_API,
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
};

// Consulta para registrar un usuario en la DB
exports.createUser = async (
	userName,
	firstName,
	lastName,
	createDate,
	lastLogin,
	userApplicationKey
) => {
	const query = {
		query: `INSERT INTO users (User_name,First_name,Last_name,Create_date,Last_login, USER_APPLICATION_KEY) VALUES ('${userName}','${firstName}','${lastName}','${createDate}','${lastLogin}','${userApplicationKey}')`,
	};
	try {
		await axios.post(process.env.URL_DB, query, {
			headers: {
				'x-api-key': process.env.TOKEN_API,
			},
		});
		const data = await this.getUser(userName);
		return data;
	} catch (error) {
		return error;
	}
};

// Actualizamos el ultimo inicio de sesion del usuario
exports.updateLastLogin = async (email, date) => {
	const query = {
		query: `UPDATE users SET Last_login = '${date}' WHERE User_name = '${email}'`,
	};
	try {
		const response = await axios.post(process.env.URL_DB, query, {
			headers: {
				'x-api-key': process.env.TOKEN_API,
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
};

exports.getUserToApp = async (code) => {
	const query = {
		query: `SELECT User_name,First_name,Last_name,Create_date,Last_login, USER_APPLICATION_KEY FROM users WHERE USER_APPLICATION_KEY = '${code}'`,
	};
	try {
		const response = await axios.post(process.env.URL_DB, query, {
			headers: {
				'x-api-key': process.env.TOKEN_API,
			},
		});
		return response.data;
	} catch (error) {
		return error;
	}
};

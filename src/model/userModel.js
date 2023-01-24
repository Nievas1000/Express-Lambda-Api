const { default: axios } = require('axios');
require('dotenv').config();
exports.getUser = async (email) => {
	console.log(email);
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
		const response = await axios.post(process.env.URL_DB, query, {
			headers: {
				'x-api-key': process.env.TOKEN_API,
			},
		});
		console.log(response);
		return response.data;
	} catch (error) {
		return error;
	}
};

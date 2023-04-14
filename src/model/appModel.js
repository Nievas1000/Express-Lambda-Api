const { default: axios } = require('axios');
/* require('dotenv').config(); */

// Obtenemos la informacion de la aplicacion del usuario con la base de datos
exports.getDataApp = async (type, userApplicationKey) => {
	try {
		const response = await axios.post(
			process.env.API_URL_DATABASE_NEPTUNE,
			{ type, userApplicationKey },
			{
				headers: {
					'x-api-key': process.env.TOKEN_API_DATABASE_NEPTUNE,
				},
			}
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

exports.deleteApp = async (type, userApplicationKey, app) => {
	try {
		const response = await axios.post(
			process.env.API_URL_DATABASE_NEPTUNE,
			{ type, userApplicationKey, app },
			{
				headers: {
					'x-api-key': process.env.TOKEN_API_DATABASE_NEPTUNE,
				},
			}
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

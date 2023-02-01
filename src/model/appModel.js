const { default: axios } = require('axios');
/* require('dotenv').config(); */

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

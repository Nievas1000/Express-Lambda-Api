const appModel = require('../model/appModel');

// obetenemos la informacion de las aplicaciones del usuario
exports.getApp = async (req, res) => {
	const type = req.body.type;
	const userApplicationKey = req.body.userApplicationKey;
	const app = await appModel.getDataApp(type, userApplicationKey);
	console.log(app);
	res.json(app);
};

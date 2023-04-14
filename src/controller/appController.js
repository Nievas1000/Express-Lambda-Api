const appModel = require('../model/appModel');

// obetenemos la informacion de las aplicaciones del usuario
exports.getApp = async (req, res) => {
	const type = req.body.type;
	const userApplicationKey = req.body.userApplicationKey;
	if (
		type.includes('.') ||
		type.includes('(') ||
		userApplicationKey.includes('.') ||
		userApplicationKey.includes('(')
	) {
		return res.status(400).json({ message: 'Error.' });
	} else {
		const app = await appModel.getDataApp(type, userApplicationKey);
		res.json(app);
	}
};

exports.deleteApp = async (req, res) => {
	const type = req.body.type;
	const app = req.body.app;
	const userApplicationKey = req.body.userApplicationKey;
	if (
		type.includes('.') ||
		type.includes('(') ||
		userApplicationKey.includes('.') ||
		userApplicationKey.includes('(') ||
		app.includes('.') ||
		app.includes('(')
	) {
		return res.status(400).json({ message: 'Error.' });
	} else {
		const response = await appModel.deleteApp(type, userApplicationKey, app);
		res.json(response);
	}
};

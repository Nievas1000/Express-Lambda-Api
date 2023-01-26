const bcrypt = require('bcryptjs');

const encrypt = async (fieldToEncrypt) => {
	const hash = await bcrypt.hash(fieldToEncrypt, 10);
	return hash;
};

const compare = async (plainField, hashField) => {
	return await bcrypt.compare(plainField, hashField);
};

module.exports = {
	encrypt,
	compare,
};

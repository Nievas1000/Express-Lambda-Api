// En este archivo se encritpta y desencriptan datos
const bcrypt = require('bcryptjs');

// Este metodo recibe un string y lo devuelve desencriptado
const encrypt = async (fieldToEncrypt) => {
	const hash = await bcrypt.hash(fieldToEncrypt, 10);
	return hash;
};

// Este metodo recibe, el string plano y el string encriptado y los compara para saber si es el mismo
const compare = async (plainField, hashField) => {
	return await bcrypt.compare(plainField, hashField);
};

module.exports = {
	encrypt,
	compare,
};

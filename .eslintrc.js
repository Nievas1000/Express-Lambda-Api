module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:cypress/recommended',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'cypress'],
	rules: {
		'react/prop-types': 'off',
		curly: ['error', 'all'],
		camelcase: 'off',
	},
};

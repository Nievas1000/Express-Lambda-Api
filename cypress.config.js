const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
	env: {
		api_url: process.env.API_URL,
	},

	defaultCommandTimeout: 10000,
	video: false,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});

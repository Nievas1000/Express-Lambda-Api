const bodyTest = {
	email: 'test@codojo.io',
	firstName: 'test',
	lastName: 'codojo',
};

const bodyTestFailure = {};

describe('Send data to api', () => {
	it('Post test on succes', () => {
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url'),
			body: bodyTest,
			headers: {
				'x-api-key': Cypress.env('token_api'),
			},
		}).then(({ body }) => {
			cy.log(body);
			const { message, status } = body;
			expect(message.User_name).to.deep.equal('test@codojo.io');
			expect(status).to.deep.equal(200);
		});
	});
	it('Post test on failure', () => {
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url'),
			body: bodyTestFailure,
			headers: {
				'x-api-key': Cypress.env('token_api'),
			},
			failOnStatusCode: false,
		}).then(({ body, status }) => {
			cy.log(body);
			expect(body.message).to.deep.equal('Internal server error');
			expect(status).to.deep.equal(502);
		});
	});
});

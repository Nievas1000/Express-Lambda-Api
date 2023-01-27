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
		}).then(({ body }) => {
			cy.log(body);
			const { message, status } = body;
			expect(message).to.deep.equal('Succesfull');
			expect(status).to.deep.equal(200);
		});
	});
	it('Post test on failure', () => {
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url'),
			body: bodyTestFailure,
			failOnStatusCode: false,
		}).then(({ body, status }) => {
			expect(body.message).to.deep.equal('Internal server error');
			expect(status).to.deep.equal(502);
		});
	});
});

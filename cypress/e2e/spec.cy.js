const bodyTest = {
	email: 'test@codojo.io',
	firstName: 'test',
	lastName: 'codojo',
};

describe('Send data to api', () => {
	it('Post test', () => {
		cy.request({
			method: 'POST',
			url: Cypress.env('api_url'),
			body: bodyTest,
		}).then(({ body }) => {
			cy.log(body);
			const { user, status } = body;
			expect(user.User_name).to.deep.equal(bodyTest.email);
			expect(status).to.deep.equal(200);
		});
	});
});

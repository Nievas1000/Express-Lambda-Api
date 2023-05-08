# ExpressApi

## Technologies

- Express
- Axios
- Bcryptjs
- Eslint
- Prettier
- Snyk
- Cypress

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/ExpressApi.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Serverless Deployment

This project uses the serverless framework to deploy the Lambda function to AWS.

### Prerequisites

Before deploying the Lambda function, make sure you have the following:

- An AWS account
- The AWS CLI installed and configured with your account credentials
- The serverless framework installed globally on your machine

To deploy the Lambda function, run the following command:

### `serverless deploy`

## Testing

We use Cypress for end-to-end testing. To run the tests, use the following command:

### `npm run test:e2e` or `npm run cypress:open`

## Code Quality

We use Eslint and Prettier to enforce code style and formatting. To run the linter and formatter, use the following command:

### `npm run lint`

## Security

We use Snyk to scan for vulnerabilities in our dependencies. To check for vulnerabilities, use the following command:

### `npm run snyk`

## HTTP requests

We use Axios to make HTTP requests to external services.

## GitHub Actions

We use GitHub Actions for continuous integration and continuous deployment.

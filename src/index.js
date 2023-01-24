const express = require('express');
const cors = require('cors');
const app = express();

app.use(
	cors({
		origin: ['http://localhost:3000', 'https://d3k7je3o78czwo.cloudfront.net'],
		methods: ['GET', 'POST'],
		credentials: true,
	})
);

app.use(express.json());

const userRouter = require('./routes/userRoutes');
app.use('/', userRouter);

app.listen(3001, () => {
	console.log('Server run on port ' + 3001);
});

module.exports = app;

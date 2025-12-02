const express = require('express');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
	console.log('Received Event:', req.body);
	res.json({ });
});

app.listen(5002, () => {
	console.log('query service')
	console.log('Server is running on http://localhost:5001');
})


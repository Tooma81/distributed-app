const express = require('express');

const app = express();
app.use(express.json());

app.listen(5005, () => {
    console.log('event-bus service');
    console.log('Server is running on http://localhost:5005');
});
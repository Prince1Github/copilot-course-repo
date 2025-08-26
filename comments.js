// Create web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Add a new route
app.get('/about', (req, res) => {
    res.send('About Page');
});

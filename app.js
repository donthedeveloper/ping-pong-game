// const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
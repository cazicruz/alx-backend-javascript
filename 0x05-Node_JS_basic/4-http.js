/* eslint-disable */
// 4-http.js
/** const express = require('express');
const app = express();
const port = 1245;

app.get('/*', (req, res) => {
    res.send('Hello Holberton School!');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
}
);*/
const http = require('http');
app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});


module.exports = app;
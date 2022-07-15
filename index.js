const express = require('express');
const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('Hello, this is the server')
});

server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});


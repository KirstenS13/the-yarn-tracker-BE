// imports
const express = require('express');

// create server
const server = express();
const port = process.env.PORT || 3000;

// use middleware here

// use routes and routers here
server.get('/', (req, res) => {
    res.send('Hello, this is the server')
});

// use error middleware here

// start the server here
server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});


// imports
const express = require('express');

// create server
const server = express();
const port = process.env.PORT || 3000;

// use middleware here
// middleware to handle incoming json data
server.use(express.json());

// use routes and routers here
server.get('/', (req, res) => {
    res.send('Hello, this is the server')
});

// use error middleware here
server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
});

// start the server here
server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});


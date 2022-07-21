const express = require('express');
const Yarntype = require('../models/yarntype_model');

const router = express.Router();

// the homepage route (for a user who is logged in)
// the homepage will display all the yarntypes the user has as cards
router.get('/', (req, res) => {
    res.send('A list of all yarntypes a user has will be displayed here')
})

module.exports = router;
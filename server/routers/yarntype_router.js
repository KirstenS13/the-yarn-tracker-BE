const express = require('express');
const Yarntype = require('../models/yarntype_model');

const router = express.Router();

// the homepage route (for a user who is logged in)
// the homepage will display all the yarntypes the user has as cards
router.get('/api/yarntypes', async (req, res, next) => {
    try {
        const yarntypes = await Yarntype.getAllYarntypes()
        res.json(yarntypes)
    } catch (err) {
        next(err)
    }
});

module.exports = router;
const knex = require('knex');
const knexfile = require('../knexfile');

// set it to use the development object in the knexfile
module.exports = knex(knexfile.development);
// can now import config file as db in whatever file it is needed in
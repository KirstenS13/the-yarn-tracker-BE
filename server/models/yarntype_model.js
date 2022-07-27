const db = require('../data/config');

// right now, this is behaving as if there only one user (no authentication process)
// once the vertical slice for this route is working, I will make it behave as if there are multiple users
function getAllYarntypes() {
    return db('yarntype');
}

module.exports = {
    getAllYarntypes
}
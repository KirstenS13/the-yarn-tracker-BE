const db = require('../data/config');

// right now, this is behaving as if there only one user (no authentication process)
// once the vertical slice for this route is working, I will make it behave as if there are multiple users
function findYarntypes() {
    return db('yarntype');
}

module.exports = {
    findYarntypes
}
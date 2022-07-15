// import { v4 as uuidv4 } from 'uuid';

// using incrementing ids for seeds only
// if figure out how to reference the uuidv4() primary keys of other tables to use as foreign keys in seeds, replace id with uuidv4()
exports.seed = async function(knex) {
  await knex('user').insert([
    { id: '1', username: 'yarnlover1', password: 'hashed_password', email: 'yarnlover1@email.com' },
    { id: '2', username: 'crochetperson', password: 'hashed_password', email: 'crochetperson@email.com' },
    { id: '3', username: 'knittingbeing', password: 'hashed_password', email: 'knittingbeing@email.com' },
    { id: '4', username: 'fiberz', password: 'hashed_password', email: 'fiberz@email.com' },
  ])
};

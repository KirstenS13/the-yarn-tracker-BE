exports.seed = async function(knex) {
  await knex('user').insert([
    { id: '1', username: 'yarnlover1', password: 'hashed_password', email: 'yarnlover1@email.com' },
    { id: '2', username: 'crochetperson', password: 'hashed_password', email: 'crochetperson@email.com' },
    { id: '3', username: 'knittingbeing', password: 'hashed_password', email: 'knittingbeing@email.com' },
    { id: '4', username: 'fiberz', password: 'hashed_password', email: 'fiberz@email.com' },
  ])
};

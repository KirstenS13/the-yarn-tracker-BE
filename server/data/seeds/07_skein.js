exports.seed = async function(knex) {
  await knex('skein').insert([
    { id: '1', user_id: '1', colorway_yarntype_id: '2', quantity: 1 },
    { id: '2', user_id: '1', colorway_yarntype_id: '4', quantity: 2 },
    { id: '3', user_id: '1', colorway_yarntype_id: '7', quantity: 5 },
    { id: '4', user_id: '1', colorway_yarntype_id: '1', quantity: 7 },
    { id: '5', user_id: '2', colorway_yarntype_id: '5', quantity: 1 },
    { id: '6', user_id: '2', colorway_yarntype_id: '8', quantity: 2.5 },
    { id: '7', user_id: '2', colorway_yarntype_id: '3', quantity: 3 },
    { id: '8', user_id: '3', colorway_yarntype_id: '6', quantity: 8 },
    { id: '9', user_id: '3', colorway_yarntype_id: '9', quantity: 1.5 },
    { id: '10', user_id: '3', colorway_yarntype_id: '10', quantity: 0.5 },
    { id: '11', user_id: '4', colorway_yarntype_id: '11', quantity: 4 },
    { id: '12', user_id: '4', colorway_yarntype_id: '12', quantity: 6 },
    { id: '13', user_id: '4', colorway_yarntype_id: '13', quantity: 1 },
    { id: '14', user_id: '4', colorway_yarntype_id: '14', quantity: 1.5 },
  ])
};

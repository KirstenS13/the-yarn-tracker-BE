exports.seed = async function(knex) {
  await knex('colorway_yarntype').insert([
    { id: '1', colorway_id: '1', yarntype_id: '1' },
    { id: '2', colorway_id: '2', yarntype_id: '1' },
    { id: '3', colorway_id: '3', yarntype_id: '1' },
    { id: '4', colorway_id: '4', yarntype_id: '1' },
    { id: '5', colorway_id: '5', yarntype_id: '1' },
    { id: '6', colorway_id: '6', yarntype_id: '3' },
    { id: '7', colorway_id: '7', yarntype_id: '3' },
    { id: '8', colorway_id: '8', yarntype_id: '3' },
    { id: '9', colorway_id: '9', yarntype_id: '2' },
    { id: '10', colorway_id: '10', yarntype_id: '2' },
    { id: '11', colorway_id: '11', yarntype_id: '2' },
    { id: '12', colorway_id: '12', yarntype_id: '4' },
    { id: '13', colorway_id: '13', yarntype_id: '4' },
    { id: '14', colorway_id: '14', yarntype_id: '4' },
  ])
};

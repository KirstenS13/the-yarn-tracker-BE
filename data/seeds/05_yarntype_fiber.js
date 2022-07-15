// import { v4 as uuidv4 } from 'uuid';

exports.seed = async function(knex) {
  await knex('yarntype_fiber').insert([
    { id: '1', fiber_id: '1', yarntype_id: '1', percentage: 100},
    { id: '2', fiber_id: '8', yarntype_id: '2', percentage: 100},
    { id: '3', fiber_id: '2', yarntype_id: '3', percentage: 100},
    { id: '4', fiber_id: '1', yarntype_id: '4', percentage: 100},
  ])
};

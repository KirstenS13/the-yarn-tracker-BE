// import { v4 as uuidv4 } from 'uuid';

exports.seed = async function(knex) {
  await knex('colorway').insert([
    { id: '1', name: 'serpent' },
    { id: '2', name: 'harpy' },
    { id: '3', name: 'griffin' },
    { id: '4', name: 'pixie' },
    { id: '5', name: 'kelpie' },
    { id: '6', name: 'thistle' },
    { id: '7', name: 'celery' },
    { id: '8', name: 'goldenrod' },
    { id: '9', name: 'pink' },
    { id: '10', name: 'turquoise' },
    { id: '11', name: 'yellow' },
    { id: '12', name: 'varsity yellow' },
    { id: '13', name: 'medium rose' },
    { id: '14', name: 'grape' },
  ])
};

const db = require('../data/db-config');

module.exports = {
 getRecipes,
 add,
 findById,
 getInstructions,
};

function getRecipes() {
 return db('recipe');
}

function findById(id) {
 return db('recipe').where({ id });
}

async function add(info) {
 const [id] = await db('recipe').insert(info);
 return db('recipe').where({ id });
}

function getInstructions(id) {
 return db('recipe as r')
  .join('steps as s', 's.recipe_id', '=', 'r.id')
  .select('r.name', 'step_number', 's.description')
  .where('recipe_id', id)
  .orderBy('step_number', 'asc');
}

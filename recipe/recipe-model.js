const db = require('../data/db-config');

module.exports = {
 getRecipes,
 add,
 findById,
 getInstructions,
 getShoppingList,
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
  .join('steps as s', 's.recipe_id', 'r.id')
  .select('r.name', 'step_number', 's.description')
  .where('recipe_id', id)
  .orderBy('step_number', 'asc');
}

function getShoppingList(id) {
 return db('recipe as r')
  .join('recipe_ingredients as r_i', 'r.id', 'r_i.recipe_id')
  .join('ingredients as i', 'i.id', 'r_i.ingredient_id')
  .select('r.name', 'i.ingredient_name', 'r_i.quantity', 'i.unit')
  .where('recipe_id', id);
}

exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('recipe')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('recipe').insert([
    { id: 1, name: 'Grand Marnier & Coffee Ice Cream' },
    { id: 2, name: 'Turnip Noodle Carbonara' },
   ]);
  });
};

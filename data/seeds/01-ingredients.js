exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('ingredients')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('ingredients').insert([
    { id: 1, ingredient_name: 'heavy cream', unit: 'cup' },
    { id: 2, ingredient_name: 'icing sugar or substitite', unit: 'cups' },
    { id: 3, ingredient_name: 'egg yolks', unit: 'ea' },
   ]);
  });
};

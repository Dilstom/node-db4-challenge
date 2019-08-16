exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex('steps')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('steps').insert([
    {
     id: 1,
     step_number: 1,
     recipe_id: 1,
     description:
      'Beat the heavy cream with half of the icing sugar substitute (added slowly) until starting to get thick',
    },
    {
     id: 2,
     step_number: 2,
     recipe_id: 1,
     description:
      'Beat the egg yolks with the remaining half of the icing sugar substitute.',
    },
    {
     id: 3,
     step_number: 3,
     recipe_id: 1,
     description:
      'Whisk the Grand Marnier, coffee, vanilla extract into the egg yolk mixture.',
    },
   ]);
  });
};

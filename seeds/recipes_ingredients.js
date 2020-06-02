const tableName = 'recipes_ingredients'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          recipes_id: 1,
          ingredients_id: 1,
          amount: 1.25
        },
        {
          recipes_id: 1,
          ingredients_id: 3,
          amount: 0.25
        },
        {
          recipes_id: 2,
          ingredients_id: 1,
          amount: .910
        },
        {
          recipes_id: 2,
          ingredients_id: 2,
          amount: 12.9
        },
        {
          recipes_id: 3,
          ingredients_id: 4,
          amount: .92
        },
        {
          recipes_id: 3,
          ingredients_id: 1,
          amount: .32
        }
      ]);
    });
};

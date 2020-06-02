const tableName = 'ingredients'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1,
          name: "butter"
        },
        {
          id: 2,
          name: "beef"
        },
        {
          id: 3,
          name: "noodles"
        },
        {
          id: 4,
          name: "pancake mix"
        }
      ]);
    });
};

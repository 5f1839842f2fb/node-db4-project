const table_name = 'steps'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(table_name).del()
    .then(function () {
      // Inserts seed entries
      return knex(table_name).insert([
        {
          id: 1,
          recipes_id: 2,
          name: "Sear steak"
        },
        {
          id: 2,
          recipes_id: 1,
          name: "Boil noodles"
        },
        {
          id: 3,
          recipes_id: 3,
          name: "fry pancake mix"
        }
      ]);
    });
};

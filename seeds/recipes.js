const tableName = 'recipes'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1, 
          name: "Butter Noodles"
        },
        {
          id: 2, 
          name: 'Steak'
        },
        {
          id: 3, 
          name: 'Pancakes'
        }
      ]);
    });
};

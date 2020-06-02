
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
    table.increments();
    table.text('name').notNullable();
  })
  .createTable('ingredients', table => {
    table.increments();
    table.text('name').notNullable();
  })
  .createTable('steps', table => {
    table.increments();
    table.integer('recipes_id').notNullable().references('recipes.id')
    table.text('name').notNullable();
  })
  .createTable('recipes_ingredients', table => {
    table.integer('recipes_id').notNullable().references('recipes.id');
    table.integer('ingredients_id').notNullable().references('ingredients.id');
    table.float('amount').notNullable();
    table.primary(['recipes_id', 'ingredients_id']);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};

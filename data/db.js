const db = require('./dbconfig')

const getRecipes = () => {
  return db('recipes')
}

const getShoppingList = id => {
  return db('recipes_ingredients')
  .where({ recipes_id: id })
  .join('ingredients', { 'recipes_ingredients.ingredients_id': 'ingredients.id' })
  .select('ingredients.name', 'recipes_ingredients.amount')
}

const getInstructions = id => {
  return db('steps').where({ recipes_id:id }).select('name')
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}
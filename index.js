const express = require('express');

const server = express();

const db = require('./data/db')

server.use(express.json());

server.get('/recipes', (req, res) => {
  db.getRecipes().then(response => res.status(200).send(response))
})

server.get('/recipes/:id/ingredients', (req, res) => {
  db.getShoppingList(req.params.id).then(response => res.status(200).send(response))
})

server.get('/recipes/:id', (req, res) => {
  db.getInstructions(req.params.id).then(response => res.status(200).send(response))
})

server.listen(3000, () => {
  console.log('listening on 3000');
});
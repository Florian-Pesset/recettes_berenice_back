const Recipe = require("../models/recipe.model.js");


// Retrieve all recipes from the database.
exports.findAll = (req, res) => {
  Recipe.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes."
      });
    else res.send(data);
  });
};
/*
// Create and Save a new recipe
exports.create = (req, res) => {
  //
};


// Find a single recipe with a recipeId
exports.findOne = (req, res) => {
  //
};

// Update a recipe identified by the recipeId in the request
exports.update = (req, res) => {
  //
};

// Delete a recipe with the specified recipeId in the request
exports.delete = (req, res) => {
  //
};

// Delete all recipes from the database.
exports.deleteAll = (req, res) => {
  //
};
*/
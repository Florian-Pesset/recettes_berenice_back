const connection = require("./db.js");

// constructor
const Recipe = function(recipe) {
  this.name = recipe.name;
  this.diet = recipe.diet;
  this.temperature = recipe.temperature;
  this.type = recipe.type;
  this.description = recipe.description;
  this.createdAt = recipe.createdAt;
  this.updatedAt = recipe.updatedAt;
};

Recipe.getAll = result => {
  connection.query("SELECT * FROM recipe", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("recipes: ", res);
    result(null, res);
  });
};

module.exports = Recipe;
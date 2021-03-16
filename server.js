const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});



require("./routes/recipe.routes.js")(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Directs express to import css & images from the public folder
app.use(express.static("public"));

// Middleware used for parsing url's and json objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import handlebars
const exphbs = require("express-handlebars");

// Initialize Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

// Initialize routes
app.use(routes);

// Initialize server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

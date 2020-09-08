//Require Dependencies
const express = require('express');
require('dotenv').config();

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
const exphbs = require("express-handlebars");
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');

//Requiring the Controller
const burgersRoutes = require("./controllers/burgersController");
app.use(burgersRoutes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
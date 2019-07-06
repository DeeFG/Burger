var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models')
// Sets up the handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"})
);
app.set("view engine", "handlebars");



// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
var routes = require("./controllers/api-routes.js");

// Starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  
 app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

});
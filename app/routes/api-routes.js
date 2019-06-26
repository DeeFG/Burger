var db = require("../models");

module.exports = function(app){
    app.get("/api/Burger", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbBurger);
    });

  });

  // POST route for saving a new todo
  app.post("/api/Burger", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Burger.create({
      text: req.body.text,
      devour: req.body.devour
    }).then(function(dbBurger) {
      // We have access to the new Burger as an argument inside of the callback function
      res.json(dbBurger);
    });

  });

  // DELETE route for deleting Burgers. We can get the id of the Burger to be deleted
  // from req.params.id
  app.delete("/api/Burger/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the Burgers we want to destroy
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });

  });

  // PUT route for updating Burgers. We can get the updated Burger data from req.body
  app.put("/api/Burger", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the Burgers we want to update
    db.Burger.update({
      text: req.body.text,
      devour: req.body.devour
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });

  });
};
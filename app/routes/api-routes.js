// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var models = require('../models'); // loads index.js
var User = models.user;    



// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api", function(req, res) {

    if (req.user === undefined) {
      res.json({});
    }else{
      res.json({
        email: req.user.email,
        firstname: req.user.firstname,
        lastname: req.user.lastname
      });
    }
  });
}

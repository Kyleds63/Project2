var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
  app.get('/signup', authController.signup);
  
  app.get('/signin', authController.signin);
 
  app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/calendar',
        failureRedirect: '/signup',
  }
 
  ));

  app.get('/calendar',isLoggedIn, authController.calendar);

  app.get('/logout',authController.logout);

  app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/calendar',
 
        failureRedirect: '/signin'
    }
 
  ));
  

  function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated()){
          next();
    }else{    
      res.redirect('/signin');
    }
 
  }

}


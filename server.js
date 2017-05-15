// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
//==============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Passport
//===================================================================
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

// Static directory
//==================================================================
app.use(express.static("app/public"));


// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
var authRoute = require('./routes/auth.js')(app,passport);


//Models
//=============================================================
var models = require("./app/models");

//Load Passport Strategies
//================================================================
require('./app/config/passport/passport.js')(passport, models.user);

 
//For Handlebars
//==============================================================
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});


//Sync Database
//================================================================
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


// Starts the server to begin listening
// =============================================================
app.listen(5000, function(err) {
	if(!err){
         console.log("App listening on PORT " + PORT);
    }else{
    	console.log(err);
    }
});
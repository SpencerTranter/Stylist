"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const methodOverride = require('method-override');
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const passport    = require('passport');
const cookieParser= require('cookie-parser');
const session     = require('express-session');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(express.static("styles"));

//initializing passport authentication with middleware
app.use(require('cookie-parser')());
app.use(session({
    secret: 'batman rules',
    proxy: true,
    resave: true,
    saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Mount all resource routes
app.use("/db/methods/users", knex);
require("./routes/api")(app);
require("./routes/users")(app, knex);
require("./routes/index")(app, knex);
require("./routes/login")(app, knex, passport);


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});



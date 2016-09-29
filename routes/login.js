"use strict";

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
//const router  = express.Router();


module.exports = (app, knex, passport) => {
  const userMethods = require('../db/methods/users.js')(knex);

  passport.use(new LocalStrategy(
    function(username, password, done) {
      userMethods.getUserByEmail(username, (err, userArray) => {
        if (err) {
          return done(err);
        }
        let user = userArray[0];
        if (!user) {
          return done(null, false)
        }
        if (password !== user.password  ) {
          return done(null, false)
        }
        console.log(user);
      return done(null, user)
      })
    }
  ))

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  app.post("/login",
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
    })
  );

  app.get("/login", (req, res) => {
    res.render("login");
  });


// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

//return router;
}

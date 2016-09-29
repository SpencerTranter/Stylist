"use strict";

const express = require('express');
// const router  = express.Router();


module.exports = (app, knex) => {
  const userMethods = require('../db/methods/users.js')(knex);

  app.get("/user/new", (req, res) => {
    res.render("create_users");
  });

  app.post("/users/new", (req, res) => {
    let user = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }
      userMethods.insertUser(user, (err, result) => {
        if (err) return console.log(err);
        //userMethods.getUsers((err,result) => {
         // console.log(result);
          res.redirect('/login');
        //});
      });
  });

  app.post("/users"), (res, req) => {

  })


  // return router;
}

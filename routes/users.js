"use strict";

const express = require('express');
// const router  = express.Router();


module.exports = (app, knex) => {
  const userMethods = require('../db/methods/users.js')(knex);
  const listMethods = require('../db/methods/lists.js')(knex);

  app.get("/user/new", (req, res) => {
    res.render("create_users");
  });

  app.post("/users/new", (req, res) => {
    let user_email = req.body.email;
    let user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
      }
      userMethods.insertUser(user, (err, result) => {
        if (err) return console.log(err);

        userMethods.getUserByEmail(user_email, (err,result) => {
          let result_id = JSON.stringify(result[0].id);
          listMethods.insertList(create_list('restaurants', result_id), (err, result) => {
            if (err) return console.log(err);
          });
          listMethods.insertList(create_list('movies', result_id), (err, result) => {
            if (err) return console.log(err);
          });
          listMethods.insertList(create_list('purchases', result_id), (err, result) => {
            if (err) return console.log(err);
          });
          listMethods.insertList(create_list('books', result_id), (err, result) => {
            if (err) return console.log(err);
          });
          console.log('User Created!');
          res.redirect('/login');
        });
      });
  });

  let create_list = function(list_type, list_user_id){
    return {type: list_type, user_id: list_user_id}
  }
  // return router;
}

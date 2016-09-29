"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  const userMethods = require('../db/methods/users.js')(knex);

  router.get("/", (req, res) => {
    userMethods.getUser(1, (err, user) => {
      if (err) return console.log(err);
      console.log(user);
    });
  });
  return router;

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("users")
  //     .then((results) => {
  //       res.json(results);
  //   });
  // });


  return router;
}

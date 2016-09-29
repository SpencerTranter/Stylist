"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  const userMethods = require('../db/methods/items.js')(knex);

  router.get("/", (req, res) => {
    userMethods.getMovies(1, (err, movies) => {
      if (err) return console.log(err);
        res.render("index", {
          movies: movies
        })
    })
  });

  return router;

}

"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  const userMethods = require('../db/methods/items.js')(knex);


//takes all items and create a function to iterate through each 'type' before rendering each one to html



  // router.get("/", (req, res) => {
  //   userMethods.getBooks(1, (err, books) => {
  //     if (err) return console.log(err);
  //       res.render("index", {
  //         books: books
  //     })
  //   })
  // });

  return router;

}

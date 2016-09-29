"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (app, knex) => {
  const itemMethods = require('../db/methods/items.js')(knex);

app.get("/", (req, res) => {
  if (!req.user) res.redirect('/login');
    itemMethods.getAll(req.user.id, (err, all) => {
      console.log(all);
      if (err) return console.log(err);
      res.render("index", {
        all: all,
        user_id: req.user.id
      })
    })
});

//req.user.id grabs id grabs id

return router;
}


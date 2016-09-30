"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (app, knex) => {
  const itemMethods = require('../db/methods/items.js')(knex);

app.get("/", (req, res) => {
  if (!req.user){
    res.redirect('/login');
    return;
  }
  console.log(req.user)
    itemMethods.getAll(req.user[0].id, (err, all) => {
      if (err) return console.log(err);
      res.render("index", {
        all: all,
        user_id: req.user.id
      })
    })
});

app.post("/insertItem", (req, res) => {
    console.log(req.user.id);
    console.log(req.body);

  });

//req.user.id grabs id grabs id

return router;
}


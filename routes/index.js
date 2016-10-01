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
    let userId = req.user[0].id
    let types = Object.keys(req.body);
    let object = req.body;

    itemMethods.getListId(userId, (err, info) => {
    if (err) return console.log(err);
      console.log(info);
    });

    types.forEach(function (type) {
      let lowerType = type.toLowerCase();
      // itemMethods.insertItem(userId, type, object[lowerType]); //works and inserts into db
    });
    // todo: save to correct dB, and if successful, return a 200 or something
  });

  //req.user.id grabs id grabs id

  return router;
}


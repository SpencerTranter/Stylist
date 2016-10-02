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

      itemMethods.getAll(req.user[0].id, (err, all) => {
        if (err) return console.log(err);
        res.render("index", {
          all: all,
          user_id: req.user[0].id
        })
      })
  });

  app.post("/insertItem", (req, res) => {
    if (!req.user) res.redirect('/login');
    let userId = req.user[0].id
    let types = Object.keys(req.body);
    let object = req.body;
    let obj = {};
    itemMethods.getListId(userId, (err, info) => {
    if (err) return console.log(err);
      info.forEach(function(each) {
        let listType = each.type;
        let listId = each.id;
        obj[listType] = listId;
      })
      types.forEach(function (type) {
        let lowerType = `${type.toLowerCase()}s`;
        let lowerTypeNoS = `${type.toLowerCase()}`;
        let list_ID = obj[lowerType];
        itemMethods.insertItem(list_ID, lowerTypeNoS, object[type]);
      });
      // return a 200 or something after saving
    });
  });
  app.delete("/delete/:id", (req, res) => {
    if (!req.user) res.redirect('/login');
    itemMethods.deleteItem(req.params.id, (err, result) => {
      res.redirect('/');
    });
  });
  return router;
}


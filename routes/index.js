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
    let obj = {};
    itemMethods.getListId(userId, (err, info) => {
    if (err) return console.log(err);
      info.forEach(function(each) {
        let listType = each.type;
        let listId = each.id;
        console.log(listType);
        console.log(listId);
        obj[listType] = listId;
      })
      console.log(obj);
      console.log(obj["movies"]);
      types.forEach(function (type) {
        let lowerType = `${type.toLowerCase()}s`;
        let list_ID = obj[lowerType];
        itemMethods.insertItem(list_ID, lowerType, object[type]);
      });
      // return a 200 or something after saving
    });
  });

  return router;
}


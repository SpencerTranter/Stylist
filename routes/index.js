"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (app, knex) => {
  //const userMethods = require('../db/methods/users.js')(knex);

app.get("/", (req, res) => {
  if (!req.user) res.redirect('/login');
  console.log("BPDDDDDY");
  console.log("USERRRR" + JSON.stringify(req.user));
  //console.log("HELLO" + req);
  res.render("index");
});

//req.user.id grabs id grabs id

return router;
}


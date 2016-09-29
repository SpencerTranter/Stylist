"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (app, knex) => {
  //const userMethods = require('../db/methods/users.js')(knex);

app.get("/", (req, res) => {
  res.render("index");
});

return router;
}

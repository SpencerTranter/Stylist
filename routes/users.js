"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {
  //const userMethods = require('../db/methods/users.js')(knex);

  router.get("/user/new"){
    res.render("create_user")
  }


  return router;
}

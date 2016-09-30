"use strict";

const express = require('express');
const tweets  = express.Router();

module.exports = function(db) {

  search.post("/", function(req, res) {
    console.log("New Tweet, Body:", req.body);
    if (!req.body.text) {
      res.status(400);
      return res.send("{'error': 'invalid request'}\n");
    }

    const user = req.body.user ? req.body.user : User.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };
    db.collection("tweets").insertOne(tweet, (err, result) => {
      console.log(result.ops);
      res.json(result.ops[0]);
    });
  });

  return tweets;

}

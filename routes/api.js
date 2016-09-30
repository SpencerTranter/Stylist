"use strict";
const request = require('request');
const https = require('https');
const express = require('express');

module.exports = (app, knex) => {

  app.post("/routes/api", (req, res) => {

    let search_text = req.body.search;

     let booksPromise = getBooks(search_text);
     let restaurantsPromise = getRestaurants(search_text);
     let purchasesPromise = getPurchases(search_text);
     let moviesPromise = getMovies(search_text);


  });

}


function getBooks(search_text) {
  let endpoint = `https://www.googleapis.com`;

  let options = {
      url: `${endpoint}/books/v1/volumes?q=${search_text}`,
      json: true
    }

    var req = request(options, function(err, data) {
      if (err) {
        console.log(err);
        return false;
      }
      if(data.body.items === undefined){
        console.log("No books");
        return;
      }
      console.log("Books:    ", data.body.items[0].volumeInfo.title);

    });

    return ;
}

function getRestaurants(search_text) {
  let endpoint = `https://developers.zomato.com`;

  let options = {
      url: `${endpoint}/api/v2.1/search?entity_id=256&entity_type=city&q=${search_text}`,
      headers: {'user_key': 'ff6827f64eb26558d0d407560246525b'},
      json: true
    }

    var req = request(options, function(err, data) {
      if (err) {
        console.log(err);
        return false;
      }
      if(data.body.restaurants[0] === undefined){
        console.log("No restaurants");
        return;
      }
      console.log("Foood:    ", data.body.restaurants[0].restaurant.name);

    });


    return ;
}

function getPurchases(search_text) {
  let endpoint = `https://api.walmartlabs.com`;

  let options = {
      url: `${endpoint}/v1/search?apiKey=6b63jzr3ugubze3q4z38e6t9&query=${search_text}`,
      json: true
    }

    var req = request(options, function(err, data) {
      if (err) {
        console.log(err);
        return false;
      }
      if(data.body.items === undefined){
        console.log("No purcheses");
        return;
      }
      console.log("Stuff:    ", data.body.items[0].name);

    });


    return ;
}

function getMovies(search_text) {
  let endpoint = `https://api.themoviedb.org`;
  let options = {
      url: `${endpoint}/3/search/movie?api_key=27ad1cee7d8982e2ea91346185032d49&language=en-US&query=${search_text}`,
      json: true
    }


    var req = request(options, function(err, data) {
      if (err) {
        console.log(err);
        return false;
      }
      if(data.body.results[0] === undefined){
        console.log("No movies");
        return;
      }
      console.log("Movies:    ", data.body.results[0].title);

    });


    return ;
}

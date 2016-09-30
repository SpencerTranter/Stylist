"use strict";
var https = require('https');
const express = require('express');

module.exports = (app, knex) => {

  app.post("/routes/api", (req, res) => {

    let search_text = req.body.search;

     //let booksPromise = getBooks(search_text);
     //let restaurantsPromise = getRestaurants(search_text);
     //let purchasesPromise = getPurchases(search_text);
     let moviesPromise = getMovies(search_text);


  });

}


function getBooks(search_text) {
  let options = {
      host: 'www.googleapis.com',
      path: `/books/v1/volumes?q=${search_text}`
    }

    let callback = function(response) {
      let str = '';
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved here so parse into object
      response.on('end', function () {
        JSON.parse(str);
      });
    }
    let https_req = https.request(options, callback);
    https_req.end();

   // return ;
}

function getRestaurants(search_text) {
  let options = {
      host: `developers.zomato.com`,
      path: `/api/v2.1/search?entity_id=256&entity_type=city&q=${search_text}`,
      headers: {'user_key': 'ff6827f64eb26558d0d407560246525b'}
    }

    let callback = function(response) {
      let str = '';
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved here so parse into object
      response.on('end', function () {
        console.log(JSON.parse(str));
      });
    }
    let https_req = https.request(options, callback);
    https_req.end();

   // return ;
}

function getPurchases(search_text) {
  let options = {
      host: `api.walmartlabs.com`,
      path: `/v1/search?apiKey=6b63jzr3ugubze3q4z38e6t9&query=${search_text}`
    }

    let callback = function(response) {
      let str = '';
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved here so parse into object
      response.on('end', function () {
        console.log(JSON.parse(str));
      });
    }
    let https_req = https.request(options, callback);
    https_req.end();

   // return ;
}

function getMovies(search_text) {
  let options = {
      host: `api.themoviedb.org`,
      path: `/3/search/movie?api_key=27ad1cee7d8982e2ea91346185032d49&language=en-US&query=${search_text}`
    }

    let callback = function(response) {
      let str = '';
      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });
      //the whole response has been recieved here so parse into object
      response.on('end', function () {
        console.log(JSON.parse(str));
      });
    }
    let https_req = https.request(options, callback);
    https_req.end();

   // return ;
}

"use strict";
const request = require('request');
const https = require('https');
const express = require('express');

module.exports = (app, knex) => {

  app.post("/routes/api", (req, res) => {
    let search_text = req.body.search;

    Promise.all([getRestaurants(search_text), getMovies(search_text.replace(/\+/g, ' ')), getBooks(search_text), getPurchases(search_text)])
    .then(function(result) {
      res.json({search_results: result});
    });
  });
}


function getBooks(search_text) {
  return new Promise(function(resolve, reject) {
    let endpoint = `https://www.googleapis.com`;
    let options = {
      url: `${endpoint}/books/v1/volumes?q=${search_text}`,
      json: true
    }
    request(options, function(err, data) {
      if (err) {
        reject(new Error());
      } else if(data.body.items === undefined){
        resolve("");
      } else {
        for (var i = 0; i < data.body.items.length; i++) {
          let bookTitle = data.body.items[i].volumeInfo.title;
          let parsedSearch = search_text.replace(/\+/g, ' ');
          if (bookTitle.indexOf(parsedSearch) === 0) {
            resolve(bookTitle);
          }
        }
        resolve("");
      }
    });
  });
}

function getRestaurants(search_text) {
  return new Promise(function(resolve, reject) {
    let endpoint = `https://developers.zomato.com`;
    let options = {
      url: `${endpoint}/api/v2.1/search?entity_id=256&entity_type=city&q=${search_text}`,
      headers: {'user_key': 'ff6827f64eb26558d0d407560246525b'},
      json: true
    }
    request(options, function(err, data) {
      if (err) {
        reject(new Error());
      } else if(data.body.restaurants[0] === undefined) {
        resolve("");
      } else {
        for (var i = 0; i < data.body.restaurants.length; i++) {
          let restaurantName = data.body.restaurants[i].restaurant.name;
          let parsedSearch = search_text.replace(/\+/g, ' ');
          if (restaurantName.indexOf(parsedSearch) === 0) {
            resolve(restaurantName);
          }
        }
        resolve("");
      }
    });
  });
}

function getPurchases(search_text) {
  return new Promise(function(resolve, reject) {
    let endpoint = `https://api.walmartlabs.com`;
    let options = {
      url: `${endpoint}/v1/search?apiKey=6b63jzr3ugubze3q4z38e6t9&query=${search_text}`,
      json: true
    }
    request(options, function(err, data) {
      if (err) {
        reject(new Error());
      } else if(data.body.items === undefined) {
        resolve("");
      } else {
        for (var i = 0; i < data.body.items.length; i++){
          let item = data.body.items[i].name;
          let parsedSearch = search_text.replace(/\+/g, ' ');
          if (item.indexOf(parsedSearch) === 0) {
            resolve(item);
          }
        }
        resolve("");
      }
    });
  });
}

function getMovies(search_text) {

  return new Promise(function(resolve, reject) {
    let endpoint = `https://api.themoviedb.org`;
    let options = {
        url: `${endpoint}/3/search/movie?api_key=27ad1cee7d8982e2ea91346185032d49&language=en-US&query=${search_text}`,
        json: true
    }
    request(options, function(err, data) {
      if (err) {
        reject(new Error());
      } else if (data.body.results[0] === undefined) {
        console.log("couldn't find it");
        resolve("");
      } else if (data.body.results[0] === undefined) {
        console.log("couldn't find it");
        resolve("");
      } else {
        // console.log(data.body.results[0].title.indexOf(search_text));
        for (var i = 0; i < data.body.results.length; i++) {
          let movieName = data.body.results[i].title;
          let parsedSearch = search_text.replace(/\+/g, ' ');
          if (movieName.indexOf(parsedSearch) === 0) {
            resolve(movieName);
          }
        }
        resolve("");
      }



    });
  });
}



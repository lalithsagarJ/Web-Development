/*jshint esversion:6*/
const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.get("/search", (req, res) => {
  res.render('search');
});
app.get("/results", (req, res) => {
  let query = req.query.search;
  console.log(query);
  request("https://api.themoviedb.org/3/movie/550?api_key=b2ff7aa2049e1729569a0c0cf290b1b2&query=" + query, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    let data = JSON.parse(body);
    res.render('results', {
      data: data,
      searchQuery: query
    });
  });
});
app.listen(1901, () => {
  console.log("server listening to port no 4040");
});

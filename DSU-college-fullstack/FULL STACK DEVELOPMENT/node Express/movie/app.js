/*jshint esversion:6*/

const express = require('express');
const app = express();
const request = require('request')
const path = require('path')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(express.static('public'));
app.get("/search", (req, res) => {
  res.render('search')
});
app.get("/results", (req, res) => {
  let query = req.query.search;
  console.log(query);
  request("https://api.themoviedb.org/3/search/movie?api_key=b423ce056d8f393989729fc10e8bbfed&query=" + query, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    let data = JSON.parse(body);
    res.render('results', {
      data: data,
      searchQuery: query
    })
  });
});
app.listen(1992, () => {
  console.log("server listening to port no 1989");
})

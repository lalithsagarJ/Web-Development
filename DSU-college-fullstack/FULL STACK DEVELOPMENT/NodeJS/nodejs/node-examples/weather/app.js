/*jshint esversion : 6*/
//http = require('http');
request = require('request');
const url = "http://api.weatherstack.com/current?access_key=441f6c3b98d85e3d81e393429ed26150&query=New%20York";

// http.request(url[,options][,callback])
// http.request({url:url},(err,response)=>
// {
// request({url:url,JSON:true},(err,response)=>{}
// );
// });

request(url, (err, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
  console.log("The current temperature is " + date.current.temperature);
  console.log("Country is " + data.location.country);
});

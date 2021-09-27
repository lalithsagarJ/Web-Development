/*jshint esversion:6*/
var rect = require('./callback.js');

function solveRect(l, b) {
  console.log("solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err)
      console.log("The error is ", err, messsge);
    else {
      console.log("The perimeter is "+rectangle.perimeter());
      console.log("The area is "+rectangle.area());
    }
  });
}

solveRect(4,5);

/*jshint esversion: 6 */
var rect = require('./rectangle');

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  if (l < 0 || b < 0) {
    console.log("invalid");
  } else {
    console.log("The perimeter with values " + l + " and " + b + " is :" + rect.perimeter(l, b));
    console.log("The area with values " + l + " and " + b + " is :" + rect.area(l, b)+"\n");
  }
}
solveRect(10, 2);
solveRect(15, 5);
solveRect(0, 4);
solveRect(3, -5);

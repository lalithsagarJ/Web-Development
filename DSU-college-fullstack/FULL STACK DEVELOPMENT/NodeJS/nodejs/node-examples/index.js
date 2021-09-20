/*jshint esversion: 6 */
var rect = {
  perimeter: (x, y) => (2 * (x + y)),
  area: (x, y) => (x * y)
};

function solveRect(l, b) {
  if (l < 0 || b < 0) {
    console.log("invalid");
  }
  else{
    console.log("The perimeter with values " + l + " and " + b + " is :" + rect.perimeter(l, b));
    console.log("The area with values " + l + " and " + b + " is :" + rect.area(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

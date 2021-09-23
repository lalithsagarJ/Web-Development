/*jshint esversion: 8 */
var fs = require('fs');
// fs.readFile(filename, utf8, function() {});

fs.readFile('/home/lucifer/Desktop/Web Development/DSU-college-fullstack/FULL STACK DEVELOPMENT/NodeJS/nodejs/node-examples/a.txt', 'utf8', function(err, data) {
  if (err) throw err;

  console.log(data);
});

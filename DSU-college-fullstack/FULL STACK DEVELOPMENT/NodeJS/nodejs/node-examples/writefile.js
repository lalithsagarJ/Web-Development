/*jshint esversion: 8 */
var fs = require('fs');
// fs.readFile(filename, utf8, function() {});

fs.writeFile('DSU-college-fullstack/FULL STACK DEVELOPMENT/NodeJS/nodejs/node-examples/b.txt','Write into file', function(err, data) {
  if (err) throw err;

  console.log(data);
});

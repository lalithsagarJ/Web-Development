var fs = require('fs');
console.log("opening file");
fs.open('DSU-college-fullstack/FULL STACK DEVELOPMENT/NodeJS/nodejs/node-examples/b.txt','w+', function(err, data) {
  console.log(data);
});

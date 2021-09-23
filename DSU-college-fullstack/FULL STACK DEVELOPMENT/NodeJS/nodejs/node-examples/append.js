var fs = require('fs');
fs.appendFile('/home/lucifer/Desktop/Web Development/DSU-college-fullstack/FULL STACK DEVELOPMENT/NodeJS/nodejs/node-examples/a.txt', 'write a new program ', function(err, data) {
  if (err) throw err;
  console.log('append done !!');
});

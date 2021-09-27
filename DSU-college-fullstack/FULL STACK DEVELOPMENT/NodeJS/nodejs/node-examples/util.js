/*jshint esversion: 10*/
var util = require('util');
var fs = require('fs');
util.debug('message on stderr');
console.log(util.format("hi on his %s:%s", 'foo', 'boo'));
console.log(util.format(1, 2, 3));
var txt = 'Congrats %s on his %dth bday';
var result = util.format(txt, 'bootstrap', 6);

console.log(result);
// console.log(util.inspect(fs,true,1));
util.log('Timestamped Message');

const content = 'hi there';
try {
  const data = fs.writeFileSync('DSU-college-fullstack/FULL STACK DEVELOPMENT/NodeJS/nodejs/node-examples/b.txt', "hi this is bootstrap writing to teach");
} catch (err) {
  console.error(err);
}

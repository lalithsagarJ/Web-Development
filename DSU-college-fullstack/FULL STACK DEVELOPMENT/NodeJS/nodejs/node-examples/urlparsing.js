var url = require('url');
var address = 'https://duckduckgo.com/?t=ffab&q=klein+bottle&iax=videos&ia=videos';
var q = url.parse(address,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
qdata = q.query;
console.log(qdata.type);
console.log(qdata.action);
console.log(qdata.id);

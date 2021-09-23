/*jshint esversion: 6 */
var http = require('http');
http.createServer((req,res)=>{

  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('hello!! Server Started');
}).listen(1120);

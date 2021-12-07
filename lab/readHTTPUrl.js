/*
 * source: https://www.w3schools.com/nodejs/nodejs_http.asp
 * execute: node readHTTPUrl.js
 *          http://localhost:8080/summer returns /summer 
 *
 */


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
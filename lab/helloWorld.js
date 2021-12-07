/*
 * source: https://www.w3schools.com/nodejs/nodejs_modules.asp
 * execute: node helloWorld.js
 *
 */

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
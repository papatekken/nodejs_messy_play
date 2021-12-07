/*
 * source: https://www.w3schools.com/nodejs/nodejs_http.asp
 * execute: node readHTTPUrl.js
 *         http://localhost:8080/?year=2017&month=July returns 2017 July
 *
 */
 
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
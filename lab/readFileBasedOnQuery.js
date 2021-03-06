/*
 * source: https://www.w3schools.com/nodejs/nodejs_url.asp
 * execute: node readFileBasedqUERY.js
 *          http://localhost:8080/sampleSourceDataSummer.txt
 *          http://localhost:8080/sampleSourceDataWinter.txt
 *
 */
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "resources" + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
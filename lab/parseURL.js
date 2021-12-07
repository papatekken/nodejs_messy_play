/*
 * source: https://www.w3schools.com/nodejs/nodejs_url.asp
 * execute: node parseURL.js
 *
 */

 
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(q.host +'<BR>');
  res.write(q.pathname+'<BR>');
  res.write(q.search+'<BR>');
  res.write(qdata.month+'<BR>');
  res.end();
}).listen(8080);
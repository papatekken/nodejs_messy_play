/*
 * source: https://www.w3schools.com/nodejs/nodejs_modules.asp
 * execute: node helloWorld.js
 *
 */

var flash = require('connect-flash');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
 
app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});

app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!')
  res.redirect('/');
});
 
app.get('/', function(req, res){
  // Get an array of flash messages by passing the key to req.flash()
  res.render('index', { messages: req.flash('info') });
});
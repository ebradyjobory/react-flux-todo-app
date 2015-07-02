'use strict';
var express    = require('express'),
    http       = require('http'),
    mongoose   = require('mongoose'),
    React = require('react');

// Create express
var app = express();
var port = process.env.PORT || 3000;

// Set teh views engine

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/react-todos');

app.get('/', function () {
  console.log('called');
});

app.get('/allNotes', function () {
  console.log('called');
});

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));


// // Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
   console.log('Express server listening on port ' + port);
});


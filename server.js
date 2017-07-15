// server.js
// SERVER-SIDE JAVASCRIPT
//creates an express application by using a top-level function
var express = require('express');
var app = express();

//seed data
var albums = [{
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

var taquerias = [{
    name: "La Taqueria"
  },
  {
    name: "El Farolito"
  },
  {
    name: "Taqueria Cancun"
  }
];

//middleware for our public folder //our static folder where we can put static resources such as html or jQuery "Set static path"
app.use(express.static('public'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //move to next functionality
  next();
});

//app. refers to the Express application created when calling the express() function.
app.get('/', function(req, res) {
  console.log("This is the REQ:", req);
  console.log("This is the RES:", res);
  //sends the response as a string
  res.sendFile('views/index.html', {
    root: __dirname
  });
  console.log('__dirname')
});

//route and route path for albums data
app.get('/api/albums', function(req, res) {
  res.json(albums);
});

//route and route path for taquerias data
app.get('/api/taquerias', function(req, res) {
  res.json(taquerias);
});
//in production use the production port, otherwise use 3000 (for development)
app.listen(process.env.PORT || 3000, function() {
  console.log('Example app listening at http://localhost:3000/');
});

// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/timestamp/:date?", function (req, res) {
    let date = null;
    if (req.params.date !== undefined) {
      // check if it is a unix timestamp...
      var unixTimestamp = parseInt(req.params.date*1);
        if (isNaN(unixTimestamp)) {
        
        // it's not a unix timestamp string
        date = new Date(req.params.date);
      } lse {
        
        // it is a timestamp
        date = new Date(unixTimestamp);
      }
    }
    });

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});


const port = process.env.PORT || 3000;
// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.get('/api/:date', (req, res) => {
  const { date } = req.params;
  let t = new Date(isFinite(date) ? parseInt(date) : date);
  console.log(t);
  if (!isNaN(t)) {
    res.json({
      unix: t.getTime(),
      utc: t.toUTCString(),
    })
  } else {
    res.json({
      error: "Invalid Date"
    })
  }
});
app.get('/api', (req, res) => {
  let time = new Date();
  res.json({
    unix: time.getTime(),
    utc: time.toUTCString(),
  })
})
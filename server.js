var express = require('express');
var path = require('path');

var app = express();

app.use(function(req, res, next) {
  console.log('got a request:' + req.path);
  if (req.path === '/hello') {
    res.send('hello!');
  } else {
    next();
  }
});
app.use(express.static(path.join(__dirname, 'www')));

app.listen(8080);

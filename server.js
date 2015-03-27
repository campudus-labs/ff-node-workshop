var express = require('express');
var path = require('path');
var app = express();

var helloRouter = express.Router();
helloRouter.get('/olli', function (req, res, next) {
  console.log('got a request:' + req.path);
  res.sendFile(path.join(__dirname, 'ollis-spezial.html'));
});
helloRouter.get('/:name', function (req, res, next) {
  console.log('got a request:' + req.path);
  res.send('hello ' + req.params.name);
});
helloRouter.get('/', function (req, res, next) {
  res.send('hello monsieur undefined');
});

app.use('/hello', helloRouter);

app.use(express.static(path.join(__dirname, 'www')));

app.listen(8080);

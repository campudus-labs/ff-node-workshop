var express = require('express');
var Handlebars = require('handlebars');
var path = require('path');
var fs = require('fs');
var app = express();

var hiTemplate;
var templateFile = path.join(__dirname, 'www', 'something.html');
fs.readFile(templateFile, 'utf8', function (err, result) {
  setTimeout(function () {
    hiTemplate = Handlebars.compile(result);
  }, 10000);
});

app.use(function(err,req, res, next){
  if(!hiTemplate){
    res.send('server not ready');
  }else {
    next();
  }
});

var helloRouter = express.Router();
helloRouter.get('/olli', function (req, res, next) {
  console.log('got a request:' + req.path);
  res.sendFile(path.join(__dirname, 'ollis-spezial.html'));
});
helloRouter.get('/:name', function (req, res, next) {
  console.log('got a request:' + req.path);
  res.send(hiTemplate({name : req.params.name}));
});
helloRouter.get('/', function (req, res, next) {
  res.send('hello monsieur undefined');
});

helloRouter.use('/:name', function (err, req, res, next) {
  if (err) {
    console.log('error1! ' + err);
  }
//  next(err);
});
helloRouter.use('/:name', function (err, req, res, next) {
  if (err) {
    console.log('error2! ' + err);
    res.send('oh oh, error2 !' + err);
  }
  next(err);
});
app.use('/hello', helloRouter);

app.use('/something', function (req, res, next) {
  var templateFile = path.join(__dirname, 'www', 'something.html');
  fs.readFile(templateFile, 'utf8', function (err, result) {
    res.send(Handlebars.compile(result)({name : 'konstantin'}));
  });
});

app.use(express.static(path.join(__dirname, 'www')));

app.listen(8080);

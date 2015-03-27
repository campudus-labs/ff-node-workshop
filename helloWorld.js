var fs = require('fs');

console.log('hello world');

var a = 1 + 2;
var b = 3;

console.log('a+b=' + a + b);

fs.readFile('test.txt', 'utf8', read);
console.log('fertig mit aktionen');

function read(err, res) {
  console.log('error=' + err);
  if (err) {
    console.log('error:' + err);
  } else {
    fs.writeFile('test2.txt', 'result=' + res, wrote);
    console.log('io fertig=' + res);
  }
}

function wrote(err) {
  console.log('jetzt wirklich fertig');
}
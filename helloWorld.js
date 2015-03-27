var fs = require('fs');

console.log('hello world');

var a = 1 + 2;
var b = 3;

console.log('a+b=' + a + b);

var i;

for (i = 0; i < 20; i++) {
  fs.appendFileSync('test.txt', 'hallo nochmal: '+i+'\n');
}
console.log('fertig');

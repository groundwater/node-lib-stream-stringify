var Cat = require('concat-stream');
var test = require('tap').test;
var stringy = require('../index.js');

test(function (t) {
  var a = "Hello World";
  stringy(a).pipe(Cat(function (final) {
    t.equal(final.toString(), a);
    t.end();
  }));
});

test(function (t) {
  var a = "Hello World";
  var x = stringy(a).read(5);

  t.equal(x.toString(), 'Hello');
  t.end();
});

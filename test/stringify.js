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

"use strict";

var util = require('util');
var stream = require('stream');

util.inherits(Stringify, stream.Readable);
function Stringify(string, opts) {
  stream.Readable.call(this, opts);

  this.string = string;
}

Stringify.prototype._read = function _read(size) {
  this.push(this.string);
  this.push(null);
};

function stringify(str) {
  return new Stringify(str);
}

module.exports           = stringify;
module.exports.Stringify = Stringify;

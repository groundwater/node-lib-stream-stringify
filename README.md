# lib-stream-stringify

> strings to streams

[![Build Status](https://travis-ci.org/groundwater/node-lib-stream-stringify.svg?branch=master)](https://travis-ci.org/groundwater/node-lib-stream-stringify)

## install

```bash
npm install --save lib-stream-stringify
```

## usage

```javascript
var stringify = require('lib-stream-stringify');
var string = "Hello world, what's new?";

stringify(string).pipe(process.stdout);
// Hello world, what's new?
```

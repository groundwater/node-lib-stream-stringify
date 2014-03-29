# lib-stream-stringify

> strings to streams

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

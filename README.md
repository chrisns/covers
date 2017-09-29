# covers.js

[![Greenkeeper badge](https://badges.greenkeeper.io/chrisns/covers.svg)](https://greenkeeper.io/)

It's always annoyed me trying to write tests & code in node.js that code coverage doesn't have the annotations that I was used to in [PHPUnit](https://phpunit.de/manual/current/en/appendixes.annotations.html#appendixes.annotations.covers)

This is an attempt to bring some of that functionality to node.js


```javascript
// exampleCode.js
function foo() {
  bar();
  return bar();
}

function bar() {
  return true;
}

function hello() {
  return true;
}

module.exports = {
  foo: foo,
  bar: bar
}
```

```javascript
// myTest.js
const exampleCode = require("exampleCode");
describe("Selective coverage", () => {
  covers(exampleCode.foo);
  it("run", () => {
    exampleCode.foo();
  })
});
```

Will result in coverage results like:
```
1x | function foo() {
1x |   bar();
1x |   return bar();
   | }

1x | function bar() {
0x |   return true;
   | }

1x | function hello() {
0x |   return true;
   | }

1x | module.exports = {
   |   foo: foo,
   |   bar: bar
   | }
```

Instead of what would ordinarily come out:
```
...
1x | function bar() {
2x |   return true;
   | }
...
```


This will allow you to write unit tests that test just the method you want, and continue to have integration and end-to-end testing that doesn't effect your code coverage results.

## Roadmap
- [x] nothing selector
- [ ] selector for named functions
- [ ] selector for anonymous functions
- [ ] selector for es6 arrow anonymous functions

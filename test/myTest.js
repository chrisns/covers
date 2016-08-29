const mod = "../lib/exampleCode";
const exampleCode = require(mod);
const exampleCodePath = require.resolve(mod);

const covers = require("../index");
const assert = require('assert');

xdescribe("Selective coverage", () => {
  covers(exampleCodePath + ':foo');
  it("run", function () {
    return assert(exampleCode.foo());
  })
});

describe("No coverage", function () {
  covers('nothing');
  it("run hello", function () {
    return assert(exampleCode.hello());
  })
});

describe("Run assertions", function () {
  var cover = global[Object.keys(global).filter((k) => k.match(/\$\$cov_\d+\$\$/))];
  it('should not have recoded coverage for hello()', function () {
    assert.equal(cover[exampleCodePath].f[3], 0)
  })
  it('should not have recoded coverage for bar()', function () {
    assert.equal(cover[exampleCodePath].f[2], 0)
  });
  xit('should have recoded coverage for foo()', function () {
    assert.equal(cover[exampleCodePath].f[1], 1)
  });
});
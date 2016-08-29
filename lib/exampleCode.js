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
  bar: bar,
  hello: hello
}
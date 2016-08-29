const _ = require("lodash");

const getCoverage = function () {
  return Object.keys(global).filter((k) => k.match(/\$\$cov_\d+\$\$/));
}

var coverage = {};

module.exports = function (matching) {
  before(function () {
    coverage = _.cloneDeep(global[getCoverage()]);
  })
  if (matching == 'nothing') {
    after(function () {
      _.forEach(global[getCoverage()], function (value, key) {
        return global[getCoverage()][key] = coverage[key];
      });
    })
  }
}
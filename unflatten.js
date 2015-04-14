'use strict';

module.exports = function unflatten(flatList, arrayPattern) {
  var output = [];
  var iM = arrayPattern.length;
  for (var i = 0; i < iM; i++) {
    var currentPattern = arrayPattern[i];
    if (Array.isArray(currentPattern)) {
      output.push(unflatten(flatList, currentPattern));
    } else {
      output.push(flatList.shift()); // @todo remove shit() usage
    }
  }

  return output;
};

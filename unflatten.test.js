'use strict';

var unflatten = require('./unflatten');
var t = require('chai').assert;
var _ = require('lodash');

describe('unflatten', function () {

  it('should be an identity function if the arrays are the same', function () {
    t.deepEqual(unflatten([1, 2, 3, 4], ['a', 'b', 'c', 'd']), [1, 2, 3, 4]);
  });

  it('should pass other element if the pattern is smaller than the flat list', function () {
    t.deepEqual(unflatten([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']), [1, 2, 3, 4]);
  });

  it('should yield an array of the same pattern as the specified one', function () {
    t.deepEqual(unflatten([1, 2, 3, 4], [
      ['a', 'b'],
      ['c', 'd']
    ]), [
      [1, 2],
      [3, 4]
    ]);
  });

  it('should work with any array level', function () {
    t.deepEqual(unflatten([1, 2, 3, 4, 5, 6], [
      ['a'],
      ['a', ['a'], 'b'],
      ['c', 'd']
    ]), [
      [1],
      [2, [3], 4],
      [5, 6]
    ]);
  });
});

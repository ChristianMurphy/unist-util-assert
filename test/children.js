/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module unist-util-assert
 * @fileoverview Test suite for `unist-util-assert`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var assert = require('..');

test('children', function (t) {
  t.throws(
    function () {
      assert({type: 'foo', children: {alpha: 'bravo'}});
    },
    /^AssertionError: `children` should be an array: `{ type: 'foo', children: { alpha: 'bravo' } }`$/,
    'should throw if given a non-node child in children'
  );

  t.throws(
    function () {
      assert({type: 'foo', children: ['one']});
    },
    /^AssertionError: node should be an object: `'one'` in `{ type: 'foo', children: \[ 'one' \] }`$/,
    'should throw if given a non-node child in children'
  );

  t.doesNotThrow(
    function () {
      assert({type: 'parent', children: [{type: 'text', value: 'alpha'}]});
    },
    'should not throw on vald children'
  );

  t.throws(
    function () {
      assert({type: 'foo', children: [{
        type: 'bar',
        children: ['one']
      }]});
    },
    /^AssertionError: node should be an object: `'one'` in `{ type: 'bar', children: \[ 'one' \] }`$/,
    'should throw on invalid descendants'
  );

  t.end();
});
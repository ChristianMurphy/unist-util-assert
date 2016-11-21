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

/* Tests. */
test('non-defined', function (t) {
  t.doesNotThrow(
    function () {
      assert({
        type: 'element',
        properties: {
          className: ['alpha'],
          id: 'bravo'
        },
        children: [],
        position: {},
        data: {
          charlie: 'delta'
        }
      });
    },
    'should not throw if non-defined properties are found'
  );

  t.throws(
    function () {
      assert({
        type: 'break',
        data: {foo: Function}
      });
    },
    /^AssertionError: non-specced property `data` should be JSON: `{ type: 'break', data: { foo: \[Function: Function\] } }`$/,
    'should throw if non-defined properties are not serialisable'
  );

  t.end();
});
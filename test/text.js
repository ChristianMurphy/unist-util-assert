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

test('assert.text()', function (t) {
  t.throws(
    function () {
      assert.text({});
    },
    /^AssertionError: node should have a type: `{}`$/,
    'should throw the same errors as `assert()`'
  );

  t.throws(
    function () {
      assert.text({type: 'strong', children: []});
    },
    /^AssertionError: text should not have `children`: `{ type: 'strong', children: \[\] }`$/,
    'should throw if the given node has `children`'
  );

  t.throws(
    function () {
      assert.text({type: 'break'});
    },
    /^AssertionError: text should have `value`: `{ type: 'break' }`$/,
    'should throw if the given node has no `value`'
  );

  t.doesNotThrow(
    function () {
      assert.text({type: 'text', value: 'foo'});
    },
    'should not throw on valid text nodes'
  );

  t.end();
});
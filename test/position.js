import test from 'tape'
import {assert} from '../index.js'

test('position', (t) => {
  t.throws(
    () => {
      assert({type: 'foo', position: 1})
    },
    /`position` should be an object: `{ type: 'foo', position: 1 }`$/,
    'should throw if given a non-object `position`'
  )

  t.doesNotThrow(() => {
    assert({type: 'foo', position: null})
  }, 'should not throw if given a null `position`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {}})
  }, 'should not throw if given an empty `position` object')

  t.throws(
    () => {
      assert({type: 'foo', position: {start: 1}})
    },
    /`position.start` should be an object: `{ type: 'foo', position: { start: 1 } }`$/,
    'should throw if given a non-object `position.start`'
  )

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {start: null}})
  }, 'should not throw if given a null `position.start`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {start: {}}})
  }, 'should not throw if given an empty `position.start` object')

  t.throws(
    () => {
      assert({type: 'foo', position: {end: 1}})
    },
    /`position.end` should be an object: `{ type: 'foo', position: { end: 1 } }`$/,
    'should throw if given a non-object `position.end`'
  )

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {end: null}})
  }, 'should not throw if given a null `position.end`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {end: {}}})
  }, 'should not throw if given an empty `position.end` object')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {start: {line: null}}})
  }, 'should not throw if given a `position.start.line` to `null`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {start: {column: null}}})
  }, 'should not throw if given a `position.start.column` to `null`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {end: {line: null}}})
  }, 'should not throw if given a `position.end.line` to `null`')

  t.doesNotThrow(() => {
    assert({type: 'foo', position: {end: {column: null}}})
  }, 'should not throw if given a `position.end.column` to `null`')

  t.throws(
    () => {
      assert({type: 'foo', position: {start: {line: 0}}})
    },
    /`position.start.line` should be gte `1`: `{ type: 'foo', position: { start: { line: 0 } } }`$/,
    'should throw if `position.start.line` is less than 1'
  )

  t.throws(
    () => {
      assert({type: 'foo', position: {start: {column: 0}}})
    },
    /`position.start.column` should be gte `1`: `{ type: 'foo', position: { start: { column: 0 } } }`$/,
    'should throw if `position.start.column` is less than 1'
  )

  t.throws(
    () => {
      assert({type: 'foo', position: {end: {line: 0}}})
    },
    /`position.end.line` should be gte `1`: `{ type: 'foo', position: { end: { line: 0 } } }`$/,
    'should throw if `position.end.line` is less than 1'
  )

  t.throws(
    () => {
      assert({type: 'foo', position: {end: {column: 0}}})
    },
    /`position.end.column` should be gte `1`: `{ type: 'foo', position: { end: { column: 0 } } }`$/,
    'should throw if `position.end.column` is less than 1'
  )

  t.end()
})

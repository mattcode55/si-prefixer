'use strict'

/* eslint-plugins mocha */
/* eslint-env mocha */

const prefixer = require('./index')
const assert = require('chai').assert

describe('Prefixer module', () => {
  it('should export a function', () => {
    assert.typeOf(prefixer, 'function')
  })
  it('should do nothing when no prefix is needed', () => {
    assert.equal('0', prefixer(0))
    assert.equal('55', prefixer(55))
    assert.equal('7.2', prefixer(7.2))
  })
  it('should work with yocto prefix', () => {
    assert.equal('3 y', prefixer(3 * 1e-24))
    assert.equal('6.2 y', prefixer(6.2 * 1e-24))
  })
  it('should work with zepto prefix', () => {
    assert.equal('3 z', prefixer(3 * 1e-21))
    assert.equal('6.2 z', prefixer(6.2 * 1e-21))
  })
  it('should work with atto prefix', () => {
    assert.equal('3 a', prefixer(3 * 1e-18))
    assert.equal('6.2 a', prefixer(6.2 * 1e-18))
  })
  it('should work with femto prefix', () => {
    assert.equal('3 f', prefixer(3 * 1e-15))
    assert.equal('6.2 f', prefixer(6.2 * 1e-15))
  })
  it('should work with pico prefix', () => {
    assert.equal('3 p', prefixer(3 * 1e-12))
    assert.equal('6.2 p', prefixer(6.2 * 1e-12))
  })
  it('should work with nano prefix', () => {
    assert.equal('3 n', prefixer(3 * 1e-9))
    assert.equal('6.2 n', prefixer(6.2 * 1e-9))
  })
  it('should work with micro prefix', () => {
    assert.equal('3 μ', prefixer(3 * 1e-6))
    assert.equal('6.2 μ', prefixer(6.2 * 1e-6))
  })
  it('should work with milli prefix', () => {
    assert.equal('3 m', prefixer(3 * 1e-3))
    assert.equal('6.2 m', prefixer(6.2 * 1e-3))
  })
  it('should work with kilo prefix', () => {
    assert.equal('3 k', prefixer(3 * 1e3))
    assert.equal('6.2 k', prefixer(6.2 * 1e3))
  })
  it('should work with mega prefix', () => {
    assert.equal('3 M', prefixer(3 * 1e6))
    assert.equal('6.2 M', prefixer(6.2 * 1e6))
  })
  it('should work with giga prefix', () => {
    assert.equal('3 G', prefixer(3 * 1e9))
    assert.equal('6.2 G', prefixer(6.2 * 1e9))
  })
  it('should work with tera prefix', () => {
    assert.equal('3 T', prefixer(3 * 1e12))
    assert.equal('6.2 T', prefixer(6.2 * 1e12))
  })
  it('should work with peta prefix', () => {
    assert.equal('3 P', prefixer(3 * 1e15))
    assert.equal('6.2 P', prefixer(6.2 * 1e15))
  })
  it('should work with exa prefix', () => {
    assert.equal('3 E', prefixer(3 * 1e18))
    assert.equal('6.2 E', prefixer(6.2 * 1e18))
  })
  it('should work with zetta prefix', () => {
    assert.equal('3 Z', prefixer(3 * 1e21))
    assert.equal('6.2 Z', prefixer(6.2 * 1e21))
  })
  it('should work with yotta prefix', () => {
    assert.equal('3 Y', prefixer(3 * 1e24))
    assert.equal('6.2 Y', prefixer(6.2 * 1e24))
  })
  it('should allow custom units', () => {
    assert.equal('0 H/s', prefixer(0, 'H/s'))
    assert.equal('3 MH/s', prefixer(3 * 1e6, 'H/s'))
    assert.equal('6.2 MH/s', prefixer(6.2 * 1e6, 'H/s'))
    assert.equal('55 μF', prefixer(55 * 1e-6, 'F'))
  })
  it('should allow precision to be changed', () => {
    assert.equal('6 M', prefixer(6.2 * 1e6, '', 1))
    assert.equal('6 MH/s', prefixer(6.2 * 1e6, 'H/s', 1))
    assert.equal('6.5 T', prefixer(6.534 * 1e12, '', 2))
    assert.equal('6.5 TH/s', prefixer(6.534 * 1e12, 'H/s', 2))
  })
})

'use strict'

const EXPONENTS = {
  '24': 'Y', // yotta
  '21': 'Z', // zetta
  '18': 'E', // exa
  '15': 'P', // peta
  '12': 'T', // tera
  '9': 'G', // giga
  '6': 'M', // mega 
  '3': 'k', // kilo
  '0': '', // nullo :)
  '-3': 'm', // milli
  '-6': 'μ', // micro
  '-9': 'n', // nano
  '-12': 'p', // pico
  '-15': 'f', // femto
  '-18': 'a', // atto
  '-21': 'z', // zepto
  '-24': 'y' // yocto
}

module.exports = function (value, unit, precision) {
  if (typeof (unit) === 'undefined') unit = ''
  if (typeof (precision) === 'undefined') precision = 12
  if (value === 0 && unit === '') return '0'
  if (value === 0) return '0' + ' ' + unit

  const sign = Math.sign(value) ? '' : '-'
  let absolute = Math.abs(value)
  let exponent = 0

  while (absolute >= 1000 && exponent < 24) {
    absolute /= 1000
    exponent += 3
  }

  while (absolute < 1 && exponent > -24) {
    absolute *= 1000
    exponent -= 3
  }

  if (exponent === 0 && unit === '') return value
  if (exponent === 0) return value + ' ' + unit

  return sign + parseFloat(absolute.toPrecision(precision)) + ' ' + EXPONENTS[exponent] + unit
}

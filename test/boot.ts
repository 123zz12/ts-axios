//import 'jasmine-ajax' // 👈 必须

const JasmineCore = require('jasmine-core')
// @ts-ignore
global.getJasmineRequireObj = function () {
  return JasmineCore
}
require('jasmine-ajax')

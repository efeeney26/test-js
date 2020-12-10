'use strict'

Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

Function.prototype.deferCustom = function (ms) {
  return (...args) => {
    setTimeout(this.bind(this, ...args), ms)
  }
}

const test = () => {
  console.log('Hi')
}

function f(a, b) {
  console.log( a + b )
}

export const showPrototypeRes = () => {
  //test.defer(1000)
  //f.deferCustom(1000)(1, 2)
}
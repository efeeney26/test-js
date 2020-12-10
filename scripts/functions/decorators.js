'use strict'

let work = (a, b) => console.log(a + b)

let spy = (func) => {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func(...args)
  }

  wrapper.calls = []
  return wrapper
}

const delay = (f, ms) => {
  return function (...args) {
    return setTimeout(f.bind(this, ...args), ms)
  }
}

const debounce = (f, ms) => {
  return function () {
    
  }
}

export const showDecoratorsResults = () => {
  /*work = spy(work)
  work(1, 5)
  work(2,3)
  console.log(work.calls)*/


  const f1000 = delay(work, 2000)
  //f1000(2, 7)
}
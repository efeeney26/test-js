'use strict'

const makeCounter = () => {
  let count = 0

  const counter = () => ++count
  counter.set = (value) => count = value
  counter.decrease = () => --count
  return counter
}

export const showNfeResult = () => {
  //const counter = makeCounter()
  //console.log(counter.set(3))
  //console.log(counter())
  //console.log(counter.decrease())
}

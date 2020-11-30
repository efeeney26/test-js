'use strict'

const printNumbersInterval = (from, to) => {
  const timer = setInterval(() => {
    console.log(from++)
  }, 1000)

  setTimeout(() => {
    clearInterval(timer)
  }, to * 1000)
}

const printNumberTimeout = (from, to) => {
  let current = from

  const print = () => {
    if (current <= to) {
      console.log(current)
      setTimeout(print, 1000)
      current++
    }
  }

  setTimeout(print, 1000)
}

export const showIntervalsResults = () => {
  //printNumbersInterval (1, 10)
  printNumberTimeout(1, 5)
}
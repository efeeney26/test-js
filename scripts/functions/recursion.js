'use strict'

const sumToIter = (n) => {
  let res = 0
  for (let i = 1; i <= n ; i++) {
    res += i
  }
  return res
}

const sumToRec = (n) => {
  return n === 1 ? 1 : n + sumToRec(n - 1)
}

const sumToForm = (n) => {
  return (1 + n) * n / 2
}

const factorial = (n) => {
  return n === 1 ? 1 : n * factorial(n - 1)
}

const printListIter = (list) => {
  for (;;) {
    console.log(list.value)
    if (list.next) {
      list = list.next
    } else {
      break
    }
  }
}

const printListRec = (list) => {
  console.log(list.value)
  if (list.next) {
    printListRec(list.next)
  }
}

const reversePrintListIter = (list) => {
  const arr = []
  for (;;) {
    arr.push(list.value)
    if (list.next) {
      list = list.next
    } else {
      break
    }
  }
  arr
    .reverse()
    .forEach(item => console.log(item))
}

const reversePrintListRec = (list) => {
  if (!list.next) {
    console.log(list.value)
  } else {
    reversePrintListRec(list.next)
    console.log(list.value)
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 10,
          next: null
        }
      }
    }
  }
}

export const showRecursionResults = () => {
  //console.log(sumToIter(4))
  //console.log(sumToRec(4))
  //console.log(sumToForm(4))
  //console.log(factorial(4))
  //printListIter(list)
  //printListRec(list)
  //reversePrintListIter(list)
  //reversePrintListRec(list)
}

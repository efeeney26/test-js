'use strict'

const sumPromptNumbers = () => {
  const a = +prompt('Введи а:')
  const b = +prompt('Введи b:')
  console.log('Сумма a + b', +(a + b).toFixed(2))
}

const readNumber = () => {
  let number
  for ( ; ; ) {
    number = +prompt('Введи число', '')
    if ( isNaN(number) ) {
    } else if (!number) {
      break
    } else {
      break
    }
  }
  console.log(`number: ${+number}`)
}

const random = (min, max) => {
  const res = min + Math.random() * (max - min)
  console.log(`random: ${res}`)
  return res
}

const randomInteger = (min, max) => {
  console.log(random(min, max).toFixed(0))
}

export const showNumbersTasks = () => {
  //sumPromptNumbers()
  //readNumber()
  //random(1, 5)
  //randomInteger(1, 5)
}

'use strict'

const getMiddleIndex = (arr) => {
  return Math.floor((arr.length) / 2)
}

const operateArray = () => {
  const styles = ['Джас', 'Блюс']
  styles.push('Рок-н-ролл')
  const midIndex = getMiddleIndex(styles)
  styles[midIndex] = 'Классика'
}

const sumInput = () => {
  let arr = []
  for (; ;) {
    const number = parseInt(prompt('Введи число', ''), 10)
    if (!isNaN(number)) {
      arr.push(number)
    } else {
      break
    }
  }
  let sum = 0
  for (const arrElement of arr) {
    sum += arrElement
  }
  console.log(`result: ${sum}`)
  return sum
}

const getMaxSubSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    
  }
  if (sum < 0) {
    sum = 0
    console.log(sum)
    return sum
  }
}

export const showArraysTasks = () => {
  //operateArray()
  //sumInput()
  getMaxSubSum([-1, -2, -3])
}
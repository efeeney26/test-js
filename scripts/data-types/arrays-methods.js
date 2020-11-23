'use strict'

const camelize = (str) => {
  const arr = str.split('-')
  const resStr = arr
    .map((item, i) => i === 0 ? item : `${item[0].toUpperCase()}${item.slice(1)}`)
    .join('')
  console.log(resStr)
  return resStr
}

const filterRange = (arr, a, b) => arr.filter(item => item >= a && item <= b)

const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((item, i) => {
    if (item <= a || item >= b) {
      arr.splice(i, 1)
    }
  })
}

const sortInDesc = (arr) => {
  arr.sort((a, b) => b - a)
  console.log(arr)
  return arr
}

const copySorted = (arr) => {
  const copyArr = [...arr]
  console.log(copyArr.sort())
  return copyArr.sort()
}

function Calculator() {
  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }

  this.calculate = (str) => {
    const arr = str.split(' ')
    const a = parseInt(arr[0], 10)
    const b = parseInt(arr[2], 10)
    const res = methods[arr[1]](a, b)
    console.log(res)
    return res
  }

  this.addMethod = (name, func) => {
    methods[name] = func
  }
}

const arrayTransformName = (arr) => arr.map((item) => item.name)

const arrayTransformFullName = (arr) => arr.map(item => ({id: item.id, fullname: `${item.name} ${item.surname}`}))

const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age)

const getAverageAge = (arr) => {
  const totalAge = arr.reduce((acc, item) => acc + item.age, 0)
  const res = totalAge / arr.length
  console.log(res)
  return res
}

export const showArraysMethods = () => {
  //camelize("background-color")
  //camelize("-webkit-transition")
  //console.log(filterRange([5, 3, 8, 1], 1, 4))
  //sortInDesc([5, 2, 1, -10, 8])

  //const arr = ["HTML", "JavaScript", "CSS"]
  //copySorted(arr)
  //console.log( arr )

  //let powerCalc = new Calculator()
  //powerCalc.calculate("2 + 3")
  //powerCalc.addMethod("*", (a, b) => a * b)
  //powerCalc.calculate("2 * 3")

  let users = [
    { name: "Вася", surname: "Пупкин", id: 1, age: 25 },
    { name: "Петя", surname: "Иванов", id: 2, age: 30 },
    { name: "Маша", surname: "Петрова", id: 3, age: 29 }
  ]
  //console.log(arrayTransformName(users))
  //console.log(arrayTransformFullName(users))
  //console.log(sortByAge(users))
  //getAverageAge(users)
}

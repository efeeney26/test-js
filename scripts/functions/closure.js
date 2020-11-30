'use strict'

const sum = (a) => (b) => console.log(a + b)

const inBetween = (a, b) => (item) => item >= a && item <= b
const isArray = (array) => (item) => array.includes(item)

const byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1

export const showClosureResults = () => {
  //sum(5)(-1)

  //console.log(arr.filter(inBetween(3, 6)))
  //console.log(arr.filter(isArray([3, 4, 10])))

  //console.log(users.sort(byField('name')))
  //console.log(users.sort(byField('age')))
}
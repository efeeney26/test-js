'use strict'

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

const sumSalaries = (salaries) => {
  let res = 0
  for (const salary of Object.values(salaries)) {
    res += salary
  }
  console.log(res)
  return res
}

const count = (obj) => {
  const res = Object.keys(obj).length
  console.log(res)
  return res
}

export const showObjectIterationResult = () => {
  //sumSalaries(salaries)
  //count(salaries)
}

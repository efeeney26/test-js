'use strict'

let user = {
  name: "John",
  years: 30
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

const destruct = (obj) => {
  const { name, years: age, isAdmin = false } = obj
  const res = {
    name,
    age,
    isAdmin
  }
  console.log(res)
  return res
}

const topSalary = (salaries) => {
  let manager = {}
  for (const [key, value] of Object.entries(salaries)) {
    if (manager.salary <= value)
      manager.salary = value
      manager.name = key
  }
  console.log(manager.name)
  return manager.name
}

export const showDestructingResults = () => {
  //destruct(user)
  //topSalary(salaries)
}

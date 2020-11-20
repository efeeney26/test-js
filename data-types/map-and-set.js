'use strict'

const unique = (arr) => {
  const res = [...new Set(arr)]
  console.log(res)
  return res
}

const aclean = (arr) => {
  const sortedArr = [...arr]
    .map(item =>
      item
      .split('')
      .map(item => item.toLowerCase())
      .sort()
      .join(''))
    .sort()
  const res = [...new Set(sortedArr)]
  console.log(res)
  return res
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


export const showMapAndSetResults = () => {
  //unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"])

  //aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])
}

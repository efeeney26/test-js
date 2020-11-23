'use strict'

const convertToJson = (obj) => {
  const json = JSON.stringify(obj)
  console.log(json)
  const res = JSON.parse(json)
  console.log(res)
}

export const showJsonResults = () => {
  //convertToJson(user)
}
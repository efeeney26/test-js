'use strict'

const ucFirst = (str) => {
  let res = ''
  if (str) {
    res = `${str[0].toUpperCase()}${str.slice(1)}`
    console.log(res)
    return res
  }
  console.log(res)
  return res
}

const checkSpam = (str) => {
  const resStr = str.toLowerCase()
  console.log(`result: ${!!(resStr.includes('viagra') || resStr.includes('xxx'))}`)
  return !!(resStr.includes('viagra') || resStr.includes('xxx'))
}

const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    const resStr = `${str.slice(0, maxlength - 1)}...`
    console.log(`result: ${resStr}`)
    return resStr
  }
  console.log(str)
  return str
}

const extractCurrencyValue = (str) => {
  const resStr = str.slice(1)
  console.log(`result: ${parseInt(resStr, 10)}`)
  return parseInt(resStr, 10)
}

export const showStringTasks = () => {
  //ucFirst('вася')
  //checkSpam('buy ViAgRA now')
  //truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
  //extractCurrencyValue('$120')
}
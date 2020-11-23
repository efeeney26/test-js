'use strict'

const getWeekDay = (date) => {
  const dayMap = ['ВС', 'ПН', 'ВТ', 'CР', 'ЧТ', 'ПТ', 'СБ']
  const res = dayMap[date.getDay()]
  console.log(res)
  return res
}

const getDateAgo = (date, days) => {
  const res = new Date(date - 1000 * 3600 * 24 * days)
  console.log(res)
  return res
}

const getLastDayOfMonth = (year, month) => {
  const res = new Date(year, month + 1, 0).getDate()
  console.log(res)
  return res
}

export const showDateResult = () => {
  //getWeekDay(new Date(2012, 0, 3))
  //getDateAgo(new Date(), 1)
  //getLastDayOfMonth(2012, 1)
}

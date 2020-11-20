"use strict"

function pow(x, n) {
  if (n < 0) {
    return NaN
  }
  if (Math.round(n) !== n) {
    return NaN
  }

  let res = x
  for (let index = 1; index < n; index++) {
      res *= x
  }
  return res
}
  
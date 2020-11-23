"use strict"

function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?')
}

function print() {
    for (let index = 2; index <= 10; index++) {
        index % 2 === 0 && console.log(index)
    }
}

function printNumber() {
    for ( ; ; ) {
        const number = prompt('Введи больше 100', '')
        if ( number < 100) {
        } else if (!number) {
            break
        } else {
            break
        }
    }
}

function min(a, b) {
    console.log(a < b ? a : b)
}

function pow(x, n) {
    let res = x
    for (let index = 1; index < n; index++) {
        res *= x
    }
    console.log(res)
}

const ask = (question, yes, no) => confirm(question) ? yes() : no()

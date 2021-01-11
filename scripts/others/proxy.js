'use strict'

let target = {}
const proxy = new Proxy(target, {})
proxy.test = 5

let numbers = [0, 1, 2]

numbers = new Proxy(numbers, {
    get(target, p, receiver) {
        if (p in target) {
            return target[p]
        } else {
            return 0
        }
    },
    set(target, p, value, receiver) {
        if (typeof value === 'number') {
            target[p] = value
            return true
        } else {
            return false
        }
    }
})

export const showProxyResults = () => {
    console.log(target.test)
    console.log(numbers[1])
    console.log(numbers[123])

    numbers.push(1)
    numbers.push('test')
    console.log(numbers.length)
}
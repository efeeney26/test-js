'use strict'

function* pseudoRandom(seed, count) {
    let res = seed
    for (let i = 0; i < count; i++) {
        res = res * 16807 % 2147483647
        yield res
    }
}

async function* generateSeq(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield i
    }
}


export const showGeneratorsResults = async () => {
    const gen = pseudoRandom(1, 3)
    console.log(gen.next().value)
    console.log(gen.next().value)
    console.log(gen.next().value)

    const gen1 = generateSeq(1, 5)
    console.log( (await gen1.next()).value)
    console.log( (await gen1.next()).value)
}

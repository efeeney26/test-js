const isEmpty = (obj) => {
    for (const key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false
    }
    return true
}

const sumObjValues = (obj) => {
    if (isEmpty(obj)) {
        return 0
    }

    let res = 0
    for (const key in obj) {
        res += obj[key]
    }

    return res
}

const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (isNaN(obj[key])) continue
        obj[key] *= 2
    }
    return obj
}

const calculator = {
    read() {
        this.a = prompt('Введи a')
        this.b = prompt('Введи b')
    },
    sum() {
        return parseInt(this.a, 10) + parseInt(this.b, 10)
    },
    mul() {
        return this.a * this.b
    }
}

let ladder = {
    step: 0,
    up() {
      this.step++
      return this
    },
    down() {
      this.step--
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      return this.step
    }
}

function Calculator() {
    this.read = calculator.read
    this.sum = calculator.sum
    this.mul = calculator.mul
}

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = () => this.value += +prompt('Введи значение')
}

const checkFunc = () => {
    let schedule = {}
    console.log( isEmpty(schedule) ) // true
    schedule["8:30"] = "get up"
    console.log(isEmpty(schedule) ) // false

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    console.log(sumObjValues(salaries))

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      }
      
    console.log(multiplyNumeric(menu))

    //calculator.read()
    //console.log('sum', calculator.sum())
    //console.log('mul', calculator.mul())

    console.log('ladder', ladder.up().up().down().up().showStep())

    const calc = new Calculator()
    //calc.read()
    //console.log('sum', calc.sum())
    //console.log('mul', calc.mul())

    const acc = new Accumulator(1)
    //acc.read()
    //acc.read()
    console.log('acc value', acc.value)
}

checkFunc()
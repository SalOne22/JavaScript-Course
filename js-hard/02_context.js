// Контекст
function hello() {
  console.log('Hello', this)
}

const person = {
  firstName: 'Владислав',
  age: 16,
  greet() {
    console.log('Приветствую!')
  },
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo(job, phone) {
    console.group('Обо мне:')
    console.log(`Мое имя ${this.firstName}`)
    console.log(`Мой возраст ${this.firstName}`)
    console.log(`Моя работа ${job}`)
    console.log(`Мой телефон ${phone}`)
    console.groupEnd()
  },
}

const lena = {
  firstName: 'Елена',
  age: 23,
}

// person.logInfo.bind(lena, 'Frontend', '086665432')()
// person.logInfo.call(lena, 'Frontend', '086665432')
person.logInfo.apply(lena, ['Frontend', '086665432'])

const array = [1, 1, 2, 3, 5, 8, 13]

// function multBy(arr, num) {
// return arr.map((i) => {
//   return i * num
// })
// }

Array.prototype.multBy = function (num) {
  return this.map((i) => {
    return i * num
  })
}

// console.log(multBy(array, 5))
// array.multBy(2)
console.log(array.multBy(5))

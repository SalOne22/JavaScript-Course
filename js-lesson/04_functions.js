// 1 Функции
// Объявление функции (Function declaration)
// function greet(name) {
//   console.log('Приветствую,', name)
// }

// Выражение функции (Function expression)
// const greet2 = function greet2(name) {
//   console.log('Приветствую,', name, '2')
// }

// greet2('Лена')
// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//  // Еще есть setTimeout
//   if (counter === 5) {
//     clearInterval(interval) // И clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet(name) {
  console.log('Приветствую,', name)
}

const arrow = (name) => {
  console.log('Приветствую,', name)
}

const arrow2 = (name) => console.log('Приветствую,', name)

arrow('Владислав')
arrow2('Владислав')

const pow2 = (num) => num ** 2

console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 0, b = 0) => a + b

console.log(sum(42, 42))

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

console.log(sumAll(4, 3, 52, 21, 4))

// 5 Замыкание
function createMember(name) {
  return function (lastName) {
    console.log(name + ' ' + lastName)
  }
}

const member = createMember('Владислав')
console.log(member('Владинов'))
console.log(member('Какойто'))

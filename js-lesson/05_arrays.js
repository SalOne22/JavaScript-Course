// 1 Массивы
// const cars = ['Audi', 'Ferrary', 'Toyota', 'Mercedes', 'ВАЗ']
// const people = [
//   { firstName: 'Владислав', lastName: 'Владинов', budget: 1250 },
//   { firstName: 'Данил', lastName: 'Какойто', budget: 2560 },
//   { firstName: 'Богдан', lastName: 'Миронов', budget: 5340 },
// ]

// const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('УАЗ')
// cars.unshift('Reno')

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(cars)
// console.log(firstCar, lastCar)

// console.log(cars)
// console.log(cars.reverse())

// cars[carIndex] = 'Porsche'

// console.log(cars)

// let findedPerson
// for (const person of people) {
//   if (person.budget === 2560) {
//     findedPerson = person
//   }
// }

// const carIndex = cars.indexOf('Toyota')
// const index = people.findIndex(function (person) {
//   return person.budget === 2560
// })
// console.log(people[index])

// const person = people.find(function (person) {
//   return person.budget === 2560
// })

// const person = people.find((person) => person.budget === 2560)

// console.log(person)

// console.log(cars.includes('ВАЗ'))

// const uppercaseCars = cars.map((car) => car.toUpperCase())

// const pow2 = (num) => num ** 2
// const sqrt = (num) => Math.sqrt(num)

// const squareFib = fib.map(pow2)

// const filteredSquareFib = squareFib.filter((num) => num > 20)

// console.log(squareFib)
// console.log(filteredSquareFib)

// console.log(uppercaseCars)
// console.log(cars)

// Задача 1
// const text = 'Hello, JavaScript!'
// const reverseText = text.split('').reverse().join('')

// console.log(reverseText)

const people = [
  { firstName: 'Владислав', lastName: 'Владинов', budget: 1250 },
  { firstName: 'Данил', lastName: 'Какойто', budget: 2560 },
  { firstName: 'Богдан', lastName: 'Миронов', budget: 5340 },
]

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget)

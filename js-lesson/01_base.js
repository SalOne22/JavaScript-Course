// 1 Переменные

// ;(camelCase) => variables
// const firstName = 'Vladyslav'
// const age = 16 //number
// const isProgrammer = true //boolean

// 2 Мутирование данных

// console.log('Имя: ' + firstName + ', возраст: ' + age)
// alert('Имя: ' + firstName + ', возраст: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2022
// const birthYear = 2005

// const age = currentYear - birthYear

// const a = 10
// const b = 12

// let c = 24
// c = c + a
// c += a

// console.log(c)

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear)
// console.log(++currentYear)
// console.log(--currentYear)

// 4 Типы Данных
// const isProgrammer = true
// const firstName = 'Vladyslav'
// const age = 16
// let x

// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof age)
// console.log(null)

// 5 Приоритеты
// const fullAge = 16
// const birthYear = 2005
// const currentYear = 2022

// > < >= <= -- Операторы сравнения
// const isFullAge = currentYear - birthYear >= fullAge // 17 >= 16 => true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'pending' // ready, fail, panding

// if (courseStatus === 'ready') {
//   console.log('Course is done for learning')
// } else if (courseStatus === 'pending') {
//   console.log('Course is not ready')
// } else {
//   console.log('Course is failed!')
// }

// const isReady = true

// if (isReady) {
//   console.log('All Done!')
// } else {
//   console.log('All Failed!')
// }

// isReady ? console.log('All Done!') : console.log('All Failed!')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7 Булевая Логика
// || && ! -- Булевые операторы Или, И, Не

// 8 Функции

// function calculateAge(year) {
//   return 2022 - year
// }

// console.log(calculateAge(2005))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//   if (age > 0) {
//     console.log('Имя: ' + name + ', Возвраст: ' + age)
//   } else {
//     console.log('Неверный год рождения: ' + year)
//   }
// }

// logInfoAbout('Vladyslav', 2005)
// logInfoAbout('Ульяна', 2032)

// 9 Массивы
// const cars = ['Audi', 'Mazda', 'BMW', 'Toyota', 'Ford']
// const cars = new Array('Audi', 'Mazda', 'BMW', 'Toyota', 'Ford')

// console.log(cars)
// console.log(cars.length)
// console.log(cars[2])
// console.log(cars[0])
// console.log(cars[5])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Audi'
// cars[cars.length] = 'Mercedes'

// console.log(cars)

// 10 Циклы
// const cars = ['Audi', 'Mazda', 'BMW', 'Toyota', 'Ford']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
const person = {
  firstName: 'Vladyslav',
  lastName: 'Vladinov',
  year: 2005,
  languages: ['ru', 'en', 'es', 'uk', 'de'],
  hasWife: false,
  greet: function () {
    console.log('greetings!')
  },
}

console.log(person.firstName + ' ' + person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.greet()

person.isProgrammer = true

console.log(person)

// Spread/Rest
const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
}

const citiesEuropeWithPopulation = {
  Moscow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
}

/// Spread
// const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]
// const allCities = citiesRussia.concat(citiesEurope)
// console.log(allCities)

// console.log(...citiesRussiaWithPopulation) // Нельзя
// console.log({ ...citiesRussiaWithPopulation }) // Надо так
// console.log({ ...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation })
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })

// Практика
// const nums = [5, 25, 63, 25, 64, 34, 42]
// console.log(Math.max(...nums))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]

// console.log(nodes, Array.isArray(nodes))
// console.log(divs, Array.isArray(divs))

/// Rest

function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [5, 25, 63, 25, 64, 34, 42]

// console.log(sum(...nums)) // Это Spread!

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums // Деструкторизация

// console.log(a, b, other)

const person = {
  name: 'Владислав',
  age: 16,
  country: 'Spain',
  city: 'Burgos',
}

const { name, age, ...address } = person

console.log(name, age, address)

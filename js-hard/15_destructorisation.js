// Деструкторизация
function calculateValues(a, b) {
  return [a + b, a - b, a * b, a / b]
}

// const [sum, sub] = calculateValues(42, 24)
const [sum, sub = 'Нельзя', mult, ...other] = calculateValues(42, 24)
// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result

console.log(sum, sub, mult, other)

// Объекты
const person = {
  name: 'Владислав',
  age: 16,
  address: {
    country: 'Spain',
    city: 'Burgos',
  },
}

// const name = person.name
// const {
//   name: firstName = 'Нет имени',
//   age,
//   car = 'Нет машины',
//   address: { city: currentCity, country: currentCountry },
// } = person

// console.log(firstName, age, car, currentCity, currentCountry)

// const { name, ...info } = person

// console.log(name, info)

function logPerson({ name: firstName = 'Нет имени', age }) {
  console.log(firstName + ' ' + age)
}

logPerson(person)

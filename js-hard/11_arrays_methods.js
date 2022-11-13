// Методы массивов
const people = [
  { firstName: 'Владислав', job: 'Fullstack', age: 16, budget: 1250 },
  { firstName: 'Елена', job: 'Student', age: 24, budget: 4250 },
  { firstName: 'Виктор', job: 'Backend', age: 31, budget: 57900 },
  { firstName: 'Генадий', job: 'Teacher', age: 43, budget: 20500 },
  { firstName: 'Данил', job: 'Programmer', age: 17, budget: 1000 },
]

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }

// for (let person of people) {
//   console.log(person)
// }

// ForEach

//ES5
// people.forEach(function (person) {
//   console.log(person)
// })

//ES6
// people.forEach((person) => console.log(person))

// Map

const newPeople = people.map((person) => `${person.firstName} (${person.age})`)

// console.log(newPeople)

// Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i])
//   }
// }

const adults = people.filter((person) => person.age >= 18)

// console.log(adults)

// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget
// }

const amount = people.reduce((total, person) => total + person.budget, 0)

// console.log(amount)

// Find
const victor = people.find((person) => person.firstName === 'Виктор')

// console.log(victor)

// FindIndex
const danil = people.findIndex((person) => person.firstName === 'Данил')

// console.log(danil)

// Практика
const richBudget = people
  .filter((person) => person.budget > 5000)
  .map((person) => {
    return {
      info: `${person.firstName} (${person.age})`,
      budget: Math.sqrt(person.budget),
    }
  })
  .reduce((total, person) => total + person.budget, 0)

console.log(richBudget)

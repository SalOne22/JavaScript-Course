// Функция bind
function logPerson() {
  console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person2 = { name: 'Елена', age: 19, job: 'SMM' }

function bind(target, func) {
  return function (...args) {
    func.apply(target, args)
  }
}

bind(person1, logPerson)()
bind(person2, logPerson)()

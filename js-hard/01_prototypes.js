// Прототипы
const person = new Object({
  firstName: 'Владислав',
  age: 16,
  greet() {
    console.log('Приветствую!')
  },
})

Object.prototype.sayHello = function () {
  console.log('Hello!')
}

const lena = Object.create(person)
lena.firstName = 'Elena'

const str = new String('I am string!')

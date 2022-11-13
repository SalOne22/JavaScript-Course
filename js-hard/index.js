// LocalStorage
const myNumber = 42

// Работает только в браузере и только со строками
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))

// localStorage.clear()
// console.log(localStorage.getItem('number'))

const obj = {
  name: 'Max',
  age: 16,
}

// localStorage.setItem('person', JSON.stringify(obj))
const person = JSON.parse(localStorage.getItem('person'))
person.name = 'Vladyslav'
console.log(person)

window.addEventListener('storage', (event) => {
  console.log(event)
})

// window.onstorage = () => {}

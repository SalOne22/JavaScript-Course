// Объекты
const person = Object.create(
  {
    //Прототип
    calculateAge() {
      console.log('Age', new Date().getFullYear() - this.birthYear)
    },
  },
  {
    firstName: {
      value: 'Владислав',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: '2005',
      enumerable: false, //По умолчанию
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = 'black'
        console.log('Set age', value)
      },
    },
  }
)

// const person = {
//   firstName: 'Владислав',
//   birthYear: '2005',
// }

// person.firstName = 'Макс'

// console.log(person)
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key:', key, person[key])
  }
}

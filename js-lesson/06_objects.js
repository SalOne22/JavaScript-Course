// 1 Объекты
// const person = {
//   firstName: 'Владислав',
//   lastName: 'Владинов',
//   budget: 1250,
//   age: 16,
//   isProgrammer: true,
//   knownLangs: ['ru', 'en', 'uk'],
//   greet() {
//     console.log('Приветствую!')
//   },
//   info() {
//     console.info('Информация про', this.firstName)
//     console.log('Это:', this)
//   },
//   'complex Key': 'Conplex Value',
//   ['key_' + (1 + 3)]: 'Computed Key',
// }

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex Key'])
// person.greet()

// delete person['key_4']

// person.age++
// person.knownLangs.push('es')

// console.log(person)

// const name = person.firstName
// const age = person.age
// const langs = person.knownLangs

// const { firstName: name, age = 10, knownLangs: langs } = person

// console.log(person)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key: ', key)
//     console.log(person[key])
//   }
// }

// Object.keys(person).forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })

// 2 Контекст
// person.info()

const logger = {
  keys() {
    console.log('Ключи объекта:', Object.keys(this))
  },
  // keysAndValues() {
  //   Object.keys(this).forEach((key) => {
  //     // Не создают собственный контекст
  //     console.log(`"${key}":`, this[key])
  //   })
  // },
  keysAndValues() {
    Object.keys(this).forEach(
      // Создают собственный контекст
      function (key) {
        console.log(`"${key}":`, this[key])
      }.bind(this)
    )
  },
  withParents(top = false, between = false, bottom = false) {
    if (top) {
      console.log('--------------- Start ---------------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}":`, this[key])
      if (between && index !== array.length - 1) {
        console.log('-------------------------------------')
      }
    })
    if (bottom) {
      console.log('---------------- End ----------------')
    }
  },
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)

// logger.keysAndValues.call(person)
// logger.withParents.call(person, true, true, true)
logger.withParents.call(person, true, false, true)
logger.withParents.apply(person, [true, true, true])

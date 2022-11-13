// 1 Строки (Strings)
// const name = 'Владислав'
// const age = 16
// const output = 'Привет, меня зовут ' + name + ' мне ' + age + ' лет'
// const output = `Привет, меня зовут ${name} мне ${age} лет`

// const output = `
//   <div>This is div</div>
//   <p>This is p</p>
// `

// console.log(output)

// const firstName = 'Владислав'
// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('слав'))
// console.log(firstName.indexOf('0'))
// console.log(firstName.startsWith('Влад'))
// console.log(firstName.endsWith('слав!'))
// console.log(firstName.repeat(3))
// const string = '              pass       '
// console.log(string.trim())

function logPerson(s, name, age) {
  console.log(s, name, age)
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Владислав'
const personAge = 16

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output)

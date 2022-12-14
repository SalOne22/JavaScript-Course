// Генераторы
// function* strGenerator() {
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//   for (let i = 0; i <= n; i++) {
//     yield i
//   }
// }

// const num = numberGen(7)

// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0

//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false }
//         } else {
//           return { value: undefined, done: true }
//         }
//       },
//     }
//   },
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i + 1
  }
}

// for (let k of 'Hello') {
//   console.log(k)
// }

// for (let k of [1, 1, 2, 3, 5, 8, 13]) {
//   console.log(k)
// }

// for (let k of iterator) {
//   console.log(k)
// }

for (let k of iter()) {
  console.log(k)
}

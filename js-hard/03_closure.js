// Замыкания

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42)

// function createIncrementor(n) {
//   return function (num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(15))
// console.log(addTen(15))

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
const comUa = urlGenerator('com.ua')
console.log(comUrl('google'))
console.log(comUrl('netflix'))
console.log(comUa('google'))
console.log(comUa('netflix'))

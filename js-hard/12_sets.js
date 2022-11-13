// Set
// Каждое значение уникально
const set = new Set([1, 1, 3, 3, 2, 2, 2, 5, 6, 5, 4])

set.add(10).add(20).add(30).add(20)

// console.log(set.has(25))
// console.log(set.size)
// console.log(set.delete(1))
// console.log(set.clear())
// console.log(set)

// console.log(set.keys(), set.values(), set.entries())

// for (const key of set) {
//   console.log(key)
// }

// Практика
function uniqValues(array) {
  // return [...new Set(array)]
  return Array.from(new Set(array))
}

console.log(uniqValues([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 6, 4, 6, 6]))

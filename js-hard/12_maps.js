// Map
const obj = {
  firstName: 'Владислав',
  age: 16,
  job: 'Fullstack',
}

const entries = [
  ['firstName', 'Владислав'],
  ['age', 16],
  ['job', 'Fullstack'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map.get('job'))

// Ключами могут быть любые объекты/числа и тд
map.set('newKey', 42).set(obj, 'Object value').set(NaN, 'Nani?')

// map.delete('job')

// console.log(map.size)

// map.clear()
// console.log(map.size)

// for (const [key, value] of map) {
//   console.log(key, value)
// }

// for (const val of map.values()) {
//   console.log(val)
// }

// for (const key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val, key, map) => {
//   console.log(val, key)
// })

// const array = [...map]
// const array = Array.from(map)

// const mapObj = Object.fromEntries(map)

// console.log(array)
// console.log(mapObj)

const users = [
  { firstName: 'Владислав' },
  { firstName: 'Елена' },
  { firstName: 'Генадий' },
  { firstName: 'Марина' },
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 4000 * 60))
  .set(users[3], new Date(new Date().getTime() + 2400 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[0]))

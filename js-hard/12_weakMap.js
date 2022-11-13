// WeakMap
// Ключами могут быть только объекты
// Вместе с удалением объекта запись о нем тоже удаляется

let obj = { name: 'weakMap' }

// const arr = [obj]

// obj = null

// console.log(obj)
// console.log(arr[0])

// Методы: get, set, delete, has
const map = new WeakMap([[obj, 'obj value']]) 

obj = null

// console.log(map.get(obj))
// console.log(map)

// Практика

const cache = new WeakMap()

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user)
}

let vladyslav = { name: 'Владислав' }
let lena = { name: 'Елена' }

cacheUser(vladyslav)
cacheUser(lena)

lena = null

console.log(cache.has(vladyslav))
console.log(cache.has(lena))

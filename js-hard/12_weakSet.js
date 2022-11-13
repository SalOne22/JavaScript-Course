// WeakSet
// Ключами могут быть только объекты
// Вместе с удалением объекта запись о нем тоже удаляется

const users = [
  { firstName: 'Владислав' },
  { firstName: 'Елена' },
  { firstName: 'Генадий' },
  { firstName: 'Марина' },
]

const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users.slice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

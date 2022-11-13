// 1 Event Loop (Ассинхронность)

const timeout = setTimeout(() => {
  console.log('После 2.5 секунд')
}, 2500)

// clearTimeout(timeout)

const interval = setInterval(() => {
  console.log('Каждую секунду')
}, 1000)

// clearInterval(interval)

const delay = (callback, waitTime = 1000) => {
  setTimeout(callback, waitTime)
}

delay(() => {
  console.log('После 2 секунд')
}, 2000)

// const delay = (waitTime = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve()
//       reject('Что-то не так')
//     }, waitTime)
//   })
//   return promise
// }

delay(2500)
  .then(() => {
    console.log('После 2 секунд')
  })
  .catch((err) => {
    console.error('Ошибка:', err)
  })
  .finally(() => {
    console.log('Готово')
  })

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]))

// getData().then((data) => console.log(data))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log(data)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Готово')
  }
}

asyncExample()

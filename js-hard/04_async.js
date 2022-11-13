// Асинхронность
console.log('Start!')
console.log('Start 2')

const timeout2sec = () => {
  console.log('timeout function')
}

window.setTimeout(() => {
  console.log('Inside Timeout of 2 sec')
}, 0)

console.log('End')

window.setTimeout(timeout2sec, 2000)

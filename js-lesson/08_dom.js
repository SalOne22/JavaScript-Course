// 1 Работа с DOM

window.alert('!')
window.confirm('?')

const heading = document.getElementById('welcome')
// const heading2 = document.getElementsByTagName("h2")[0] // ❌
// const heading2 = document.getElementsByClassName("h2-class")[0] // ❌
// const heading2 = document.querySelector("h2") // ✔️
// const heading2 = document.querySelector(".h2-class") // ✔️
const heading2 = document.querySelector('#h2-sub') // ✔️ Всегда 1 элемент
console.log(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2') // Много элементов
const heading3 = h2List[1]
// const heading3 = h2List[h2List.length - 1]
console.log(heading3)

console.dir(heading.textContent)

setTimeout(() => {
  addStylesTo(heading, 'JavaScript Code')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Link click')
  const url = event.target.getAttribute('href')
  window.location = url
})

setTimeout(() => {
  addStylesTo(link, 'Another Text', 'blue')
}, 3000)

setTimeout(() => {
  addStylesTo(heading2, 'And all done!', 'lime', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'gray'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'
  // Ecли не Falsy: undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = 'black'
    heading.style.backgroundColor = 'white'
  } else {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'black'
  }
}

heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'lime') {
    heading2.style.color = 'black'
    heading2.style.backgroundColor = 'white'
  } else {
    heading2.style.color = 'lime'
    heading2.style.backgroundColor = 'black'
  }
})

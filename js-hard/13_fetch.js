// Fetch Get/Post
const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response.json().then((error) => {
        const err = new Error('Something went wrong')
        err.data = error
        throw err
      })
    }
  })
}

// sendRequest('GET', requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))

body = {
  name: 'Vladyslav',
  age: 16,
}

sendRequest('POST', requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.error(err))

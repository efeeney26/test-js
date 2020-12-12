'use strict'

import { showCircle } from "./callbacks.js"

const delay = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() =>res('success'), ms)
    setTimeout(() => rej(new Error('unknown err')), ms)
  })
}

const showCirclePromise = (radius) => {
  const button = document.createElement('button')
  button.innerText = 'Button'
  document.body.append(button)
  let div = document.createElement('div')
  button.onclick = () => {
    const circle = document.createElement('div')
    circle.style.height = '100px'
    circle.style.width = '100px'
    circle.style.display = 'flex'
    circle.style.justifyContent = 'center'
    circle.style.alignItems = 'center'
    circle.style.borderRadius = '50%'
    circle.style.backgroundColor = 'red'
    circle.style.transitionDuration = '2s'
    setTimeout(() => {
      circle.style.width = `${radius}px`
      circle.style.height = `${radius}px`
    }, 0)
    document.body.append(circle)
    circle.append(div)
  }
  return new Promise((res, rej) => {
    if (div) {
      setTimeout(() => res(div), 4000)
    } else {
      setTimeout(() => rej(new Error('no elem')), 4000)
    }
  })
}

const promise = new Promise((res) => {
  setTimeout(() => res(2), 1000)
})

const loadJson = (url) => {
  return fetch(url)
    .then(res => res.json())
}

const showAvatar = (user) => {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = user.avatar_url
    document.body.append(img)

    setTimeout(() => {
      img.remove()
      resolve(user)
    }, 3000)
  })
}

const urls = [
  './scripts/promises/__mocks__/test.json',
  './scripts/promises/__mocks__/test1.json',
  './scripts/promises/__mocks__/test2.json',
]

const wrongUrls = [
  ...urls,
  'http://wrong'
]

const promisify = (f) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = (res, err) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(res)
        }
      }
      console.log(callback)
      args.push(callback)
      f.call(this, ...args)
    })
  }
}

const showCirclePromisify = promisify(showCircle)

export const showPromRes = () => {
  /*delay(3000)
    .then((val) => console.log(`status: ${val}. Выполнилось через 3 сек`))
    .catch((e) => console.error(e))*/

  /*showCirclePromise(200)
    .then(elem => {
      console.log('ok')
      elem.innerText = 'Hello world'
    })
    .catch(e => console.error(e))*/

  /*promise
    .then((val) => {
      const res = val * 2
      console.log('промежуточный', res)
      return new Promise(resolve => setTimeout(() => resolve(res), 3000))
    })
    .then((val) => {
      const res = val * 2
      console.log('финальный', res)
    })*/

  /*loadJson('./scripts/promises/test.json')
    .then(user => loadJson(`https://api.github.com/users/${user.name}`))
    .then(githubUser => showAvatar(githubUser))
    .then(githubUser => console.log(`End chain ${githubUser.login}`))
    .catch(e => console.error(e))*/


  /*Promise.all([
    loadJson('./scripts/promises/__mocks__/test.json'),
    loadJson('./scripts/promises/__mocks__/test1.json'),
    loadJson('./scripts/promises/__mocks__/test2.json'),
  ])
    .then((values) => console.log(values))*/

  /*Promise.all([
    new Promise(res => setTimeout(() => res(1), 3000)),
    new Promise((res) => setTimeout(() => res(2), 2000)),
    new Promise(res => setTimeout(() => res(3), 1000))
  ])
    .then(val => console.log(val))*/

  const getRequests = (urls) => urls.map((url) => fetch(url))

  /*const requests = getRequests(urls)
  Promise.all(requests)
    .then(responses => {
      responses.forEach((response) => {
        console.log(`${response.url}: ${response.status}`)
      })
      return responses
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then((users) => console.log(users))*/


  /*const requestsWithWrongUrl = getRequests(wrongUrls)
  Promise.allSettled(requestsWithWrongUrl)
    .then(results => console.log(results))*/

  /*Promise.race([
    new Promise(res => setTimeout(() => res(1), 3000)),
    new Promise((res) => setTimeout(() => res(2), 2000)),
    new Promise(res => setTimeout(() => res(3), 1000))
  ])
    .then(val => console.log(val)) //3*/

  showCirclePromisify(200)
    .then(elem => elem.innerText = 'Hello world')

}
'use strict'

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

const loadJson = async (url) => {
    const res = await fetch(url)
    if (res.status === 200) {
      return res.json()
    }
    throw new HttpError(res)
}

const demoGitHubUser = async () => {
  const name = prompt('Enter name')
  try {
    const {avatar_url, login} = await loadJson(`https://api.github.com/users/${name}`)
    const img = document.createElement('img')
    const span = document.createElement('div')
    img.src = avatar_url
    span.innerText = login
    document.body.append(span)
    document.body.append(img)
  } catch(err) {
    if (err instanceof HttpError && err.response.status === 404) {
      console.error('User not found')
    } else {
      throw err
    }
  }
}

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return 10
}

export const showAsyncAwaitRes = async () => {
  /*const res = await loadJson('./scripts/promises/__mocks__/test.json')
  console.log(res)*/

  //await demoGitHubUser()

  //wait().then((val => console.log(val)))
}
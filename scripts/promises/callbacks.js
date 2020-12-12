'use strict'

export const showCircle = (radius, callback) => {
  const button = document.createElement('button')
  button.innerText = 'Button'
  document.body.append(button)
  const div = document.createElement('div')
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
  setTimeout(() => {
    callback(div)
  }, 4000)
}

export const showCallbacksRes = () => {

  showCircle(200, (div) => {
    div.innerText = "Hello, world!"
  })
}
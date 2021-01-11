export const sayHi = () => {
    const div = document.createElement('div')
    div.innerText = 'Async script'
    document.body.appendChild(div)
}
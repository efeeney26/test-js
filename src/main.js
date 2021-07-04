'use strict'

import { Menu } from "./components"

const pandaMenu = new Menu({
    title: "Меню панды",
    items: [{
        text: 'Яйца',
        href: '#eggs'
    }, {
        text: 'Мясо',
        href: '#meat'
    }, {
        text: '99% еды - бамбук!',
        href: '#bamboo'
    }]
});

const button = document.createElement('button')
button.innerText = 'fetch'
button.onclick = async () => {
    const response = await fetch('/api')
    const sayHi = await response.text()
    const span = document.createElement('span')
    span.innerText = sayHi
    document.body.appendChild(span)
}

document.body.appendChild(pandaMenu.elem)

document.body.appendChild(button)

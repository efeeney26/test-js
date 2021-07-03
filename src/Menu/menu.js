'use strict'

import './style.css'

class Menu {
    constructor(options) {
        this.elem = document.createElement('div')
        this.elem.className = 'menu'
        this.elem.innerText = options.title

        const ul = document.createElement('ul')
        ul.className = 'list'

        options.items.forEach((item) => {
            const li = document.createElement('li')
            li.innerText = item.text

            ul.appendChild(li)
        })

        this.elem.appendChild(ul)

        this.elem.onclick = () => {
            ul.classList.toggle('open')
        }
    }
}

export default Menu

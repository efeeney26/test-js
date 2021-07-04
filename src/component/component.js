import { join } from "lodash"
import img from "../../assets/images/test.png"

import './style.css'

function component() {
    const element = document.createElement('div')

    element.innerHTML = join(['Hello', 'webpack', '!!'], ' ')
    element.className = 'hello'

    const myIcon = new Image()
    myIcon.src = img

    element.appendChild(myIcon)

    return element
}

export default component

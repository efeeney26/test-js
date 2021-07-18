import { square } from "../utils/math";

function component() {
    const element = document.createElement('pre')

    element.innerHTML = [
        'Hello webpack!',
        '5 square is equal to ' + square(5)
    ].join('\n\n')

    return element
}

export default component

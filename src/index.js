import component from "./component/component";
import print from "./print";

const main = () => {
    const button = document.createElement('button')
    button.innerHTML='Click me'
    button.onclick = () => {
        print()
    }
    document.body.appendChild(component())
    document.body.appendChild(button)
}

main()

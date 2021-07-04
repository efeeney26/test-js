import component from "./component/component";

const main = () => {
    const button = document.createElement('button')
    button.innerHTML='Click me'
    button.onclick = async () => {
        const { default: print } = await import('./print')
        print()
    }
    document.body.appendChild(component())
    document.body.appendChild(button)
}

main()

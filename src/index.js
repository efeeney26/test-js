import component from "./component/component";
import print from "./print";

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

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated print module!')
        print()
    })
}

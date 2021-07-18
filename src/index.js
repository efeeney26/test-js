import component from "./component/component"

const main = () => {
    document.body.appendChild(component())
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
}

main()

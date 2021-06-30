'use strict'

const loginButton = document.querySelector('#loginButton')
const logoutButton = document.querySelector('#logoutButton')

loginButton.onclick = () => {
    require.ensure([], (require) => {
        const login = require('./login')

        login()
    }, 'auth')
}

logoutButton.onclick = () => {
    require.ensure([], (require) => {
        const logout = require('./logout')

        logout()
    }, 'auth')
}

const moduleName = location.pathname.slice(1)

if (moduleName) {
    const route = require(`./routes/${moduleName}`)

    route()
}

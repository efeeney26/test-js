'use strict'

const welcome = (str) => {
    if (NODE_ENV === 'development') {
        console.log('development')
    }
    console.log(`welcome ${str}`)
}

export default welcome

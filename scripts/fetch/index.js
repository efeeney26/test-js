'use strict'

const books = ['1', '2', '3', '100', '4']

const getBooks = async (books) => {
    const jobs = []
    books.forEach(book => {
        const job = fetch(`https://library-back-restapi.herokuapp.com/api/books/${book}`)
            .then(res => res.json())
            .catch(e => {
                console.error(e)
                return null
            })
        jobs.push(job)
    })
    return await Promise.all(jobs)
}

export const showFetchResults = async () => {
    const res = await getBooks(books)
    console.log('res', res)
}

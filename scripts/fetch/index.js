'use strict'

const books = ['1', '2', '3', '100', '4']

const getBooks = async (books) => {
    const jobs = []
    books.forEach(book => {
        const job = fetch(`https://library-back-restapi.herokuapp.com/api/books/${book}`)
            .then(async (res) => {
                const reader = res.body.getReader()

                // Шаг 2: получаем длину содержимого ответа
                const contentLength = +res.headers.get('Content-Length')

                // Шаг 3: считываем данные:
                let receivedLength = 0 // количество байт, полученных на данный момент
                let chunks = [] // массив полученных двоичных фрагментов (составляющих тело ответа)
                while (true) {
                    const {done, value} = await reader.read()

                    if (done) {
                        break
                    }

                    chunks.push(value)
                    receivedLength += value.length

                    console.log(`Получено ${receivedLength} из ${contentLength}`)
                }

                // Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
                let chunksAll = new Uint8Array(receivedLength)
                let position = 0
                for(let chunk of chunks) {
                    chunksAll.set(chunk, position)
                    position += chunk.length;
                }

                // Шаг 5: декодируем Uint8Array обратно в строку
                let result = new TextDecoder("utf-8").decode(chunksAll)

                // Готово!
                return JSON.parse(result)
            })
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

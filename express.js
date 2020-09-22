const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('hello from express!')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }

    console.log('server is listening on ',port)
})

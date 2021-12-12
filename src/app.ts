import express from 'express'
import config from 'config'

import connect from './utils/connect'
import routes from './routes'

// const port = config.get<string>('port')
const port = 8080


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.listen(port, async () => {
    await connect()

    routes(app)

    console.log(`Connected on port: ${port}`);
    


})
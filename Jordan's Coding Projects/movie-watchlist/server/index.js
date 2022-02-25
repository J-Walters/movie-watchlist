const express = require('express')
const app = express()

const dbConnection = require('./db')

const PORT = 8080

const startServer = async () => {
    await dbConnection.sync()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`)
    })
}
startServer()



app.get('/', (req, res) => {
    res.send('Hello :)');
})
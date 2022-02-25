const express = require('express')
const app = express()

const {dbConnection} = require('./db');

const PORT = 8080

const startServer = async () => {
    await dbConnection.sync()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!`)
    })
}
startServer()

//matches any url for a GET request to a possible file
//in the public directory
app.use(express.static(__dirname + "/public"))

//start of all middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const genresRouter = require('./routes/genre')
app.use("/genre", genresRouter);

const moviesRouter = require('./routes/movie')
app.use('/movies', moviesRouter)

app.get('/', (req, res) => {
    res.send('Hello :)');
})
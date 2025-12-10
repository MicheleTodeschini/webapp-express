const express = require('express')
const app = express()
const PORT = 3000
const moviesRouter = require('./routes/films')
const connection = require('./database/connection')

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

//REGISTER THE BOFY PARSER
app.use(express.json())

//ADD STATIC ASSETS
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('My films api server')
})

app.use('/api/movies', moviesRouter)
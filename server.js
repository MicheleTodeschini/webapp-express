const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const moviesRouter = require('./routes/films')
const connection = require('./database/connection')


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})

//REGISTER THE BOFY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ADD STATIC ASSETS
app.use(express.static('public'))

//ADD CORS SO MY FRONTEND IS NOT BLOCKED
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send('My films api server')
})

app.use('/api/movies', moviesRouter)
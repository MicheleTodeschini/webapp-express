const connection = require('../database/connection')

const index = (req, res) => {
    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, results) => {
        res.json(results)
    })
}



const show = (req, res) => {
    const id = req.id.params

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })
        console.log(results);

        const movie = results[0]

        res.json = movie

    })
}
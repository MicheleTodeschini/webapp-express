const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const movieController = require('../backup_locali/controllers/movieController')
=======
const movieController = require('../controllers/movieController')
>>>>>>> origin/main


// Per richiamarli su Postman, usare http://localhost:3000/api/movies/


//INDEX
router.get('/', movieController.index)


//SHOW
router.get('/:id', movieController.show)

module.exports = router
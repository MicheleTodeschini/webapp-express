const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')



// Per richiamarli su Postman, usare http://localhost:3000/api/movies/


//INDEX
router.get('/', movieController.index)


//SHOW
router.get('/:id', movieController.show)

// STORE POST /API/FILM
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/',)

module.exports = router
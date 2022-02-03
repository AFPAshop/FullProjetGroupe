const product = require('../controller/product.js');
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth')

// getAll (R)
router.get('/getall', product.getAll);

// create (C)
router.post('/create', multer, product.create);

// update (U)
router.put('/update/:id', auth, multer, product.update);

// delete (D)
router.delete('/delete/:id', auth, product.delete);

module.exports = router;
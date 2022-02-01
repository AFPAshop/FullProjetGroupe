const product = require('../controller/product.js');
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')

// create
router.post('/create', multer, product.create);

// update
router.put('/update/:id', product.update);

// delete
router.delete('/delete/:id', product.delete);

// find All
router.get('/getall', product.getAll);

// find One by id
router.get('/getone/:id', product.getOne);

module.exports = router;
const product = require('../controller/product.js');
const express = require('express');
const router = express.Router();

// create
router.post('/create', product.create);

// update
router.put('/update/:id', product.update);

// delete
router.delete('/delete/:id', product.delete);

// find All
router.get('/getall', product.getAll);

// find One by id
router.get('/getone/:id', product.getOne);


module.exports = router;
const product = require('../controller/product.js');
const express = require('express');
const router = express.Router();


const multer = require('multer');
const upload = multer({
    dest: './images'
})

// create
router.post('/create', upload.single('file'), product.create);

// update
router.put('/update/:id', product.update);

// delete
router.delete('/delete/:id', product.delete);

// find All
router.get('/getall', product.getAll);

// find One by id
router.get('/getone/:id', product.getOne);


module.exports = router;
const category = require('../controller/category.js');
const express = require('express');
const router = express.Router();

// create
router.post('/create', category.create);

// update
router.put('/update/:id', category.update);

// delete
router.delete('/delete/:id', category.delete);

// find all 
router.get('/getall', category.getAll);

// find one by id
router.get('/getone/:id', category.getOne);


module.exports = router;
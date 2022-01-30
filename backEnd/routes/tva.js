const tva = require('../controller/tva.js');
const express = require('express');
const router = express.Router();

// create
router.post('/create', tva.create);

// update
router.put('/update/:id', tva.update);

// delete
router.delete('/delete/:id', tva.delete);

// find all 
router.get('/getall', tva.getAll);

// find one by id
router.get('/getone/:id', tva.getOne);

module.exports = router;
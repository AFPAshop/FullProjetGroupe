const commande = require('../controller/commande.js');
const express = require('express');
const router = express.Router();

// create
router.post('/create', commande.create);

// update
router.put('/update/:id', commande.update);

// delete
router.delete('/delete/:id', commande.delete);

// find all 
router.get('/getall', commande.getAll);

// find one by id
router.get('/getone/:id', commande.getOne);


module.exports = router;
const commande = require('../controller/commande.js');
const express = require('express');
const router = express.Router();

// getAll (R)
router.get('/getall', commande.getAll);

// getOne (R)
router.get('/getone/:id', commande.getOne);

// create (C)
router.post('/create', commande.create);

// update (U)
router.put('/update/:id', commande.update);

// delete (D)
router.delete('/delete/:id', commande.delete);

module.exports = router;
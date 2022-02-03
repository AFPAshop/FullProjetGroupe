const tva = require('../controller/tva.js');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// getAll (R)
router.get('/getall', tva.getAll);

// create (C)
router.post('/create', auth, tva.create);

// update (U)
router.put('/update/:id', auth, tva.update);

// delete (D)
router.delete('/delete/:id', auth, tva.delete);

module.exports = router;
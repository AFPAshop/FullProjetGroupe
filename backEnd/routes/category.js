const category = require('../controller/category.js');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

// getAll (R)
router.get('/getall', category.getAll);

// create (C)
router.post('/create', category.create);

// update (U)
router.put('/update/:id', auth, category.update);

// delete (D)
router.delete('/delete/:id', category.delete);

module.exports = router;
const role = require('../controller/role.js');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

// getAll (R)
router.get('/getall', role.getAll);

// create (C)
router.post('/create', auth, role.create);

// update (U)
router.put('/update/:id', auth, role.update);

// delete (D)
router.delete('/delete/:id', auth, role.delete);

module.exports = router;
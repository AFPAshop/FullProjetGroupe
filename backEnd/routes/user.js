const user = require('../controller/user.js');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// getAll (R)
router.get('/getall', user.getAll);

// create (C)
router.post('/create', user.create);

// update (U)
router.put('/update/:id', auth, user.update);

// delete (D)
router.delete('/delete/:id', auth, user.delete);

//login
router.post('/login', user.login);

module.exports = router;
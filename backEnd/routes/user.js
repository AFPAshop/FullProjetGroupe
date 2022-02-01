const user = require('../controller/user.js');
const express = require('express');
const router = express.Router();

// create
router.post('/create', user.create);

// update
router.put('/update/:id', user.update);

// delete
router.delete('/delete/:id', user.delete);

// read
router.get('/getall', user.getAll);

// search
router.get('/getone/:id', user.getOne);


module.exports = router;
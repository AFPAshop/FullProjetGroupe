const role =  require('../controller/role.js');
const express =  require('express');
const router =  express.Router();

// create
router.post('/create', role.create );

// update
router.put('/update/:id', role.update); 

// delete
router.delete('/delete/:id', role.delete);

// find all 
router.get('/getall', role.getAll);

// find one by id
router.get('/getone/:id', role.getOne);


module.exports = router;
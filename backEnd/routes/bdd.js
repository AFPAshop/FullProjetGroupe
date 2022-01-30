const bdd = require('../controller/bdd.js');
const express = require('express');
const router = express.Router();

// create
router.get('/getNameBdd', bdd.getName);

module.exports = router;
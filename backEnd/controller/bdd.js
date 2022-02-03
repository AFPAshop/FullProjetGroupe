const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/Bdd');

exports.getName = (req, res, next) => {
    const db = dbService.getBddInstance();
    const result = db.getName();
    result
        .then(name => res.status(200).json(name))
        .catch(err => console.log(err));
}
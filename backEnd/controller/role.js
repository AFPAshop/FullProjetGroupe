const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/role');

exports.getAll = (req, res, next) => {
    const db = dbService.getRoleInstance();
    const result = db.getAll();
    result
        .then(results => {
            res.status(200).send(JSON.stringify(results))
            console.log(results)
        })
        .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let type = req.body.type;
    console.log(req.body);
    const db = dbService.getRoleInstance();
    const result = db.insertOne(type);
    result
        .then(() => res.status(200).json({
            message: 'Role bien créé'
        }))
        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    let type = req.body.type;
    console.log(req.body);
    const db = dbService.getRoleInstance();
    const result = db.updateById(id, type);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur mis à jour'
        }))

        .catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    console.log(id);
    const db = dbService.getRoleInstance();
    const result = db.deleteById(id);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur supprimé'
        }))

        .catch(err => console.log(err));
}
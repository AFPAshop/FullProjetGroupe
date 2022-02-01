const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/Category');


exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios    
    let nom = req.body.nom;
    let id_parent = req.body.id_parent;
    console.log(req.body);
    const db = dbService.getCategoryInstance();
    const result = db.insertOne(nom, id_parent);
    result
        .then(() => res.status(200).json({
            message: 'Catégorie bien créé'
        }))
        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    let nom = req.body.nom;
    let id_parent = req.body.id_parent;
    console.log(req.body);
    const db = dbService.getCategoryInstance();
    const result = db.updateById(id, nom, id_parent);
    result
        .then(() => res.status(200).json({
            message: 'Catégorie mise à jour'
        }))

        .catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    console.log(id);
    const db = dbService.getCategoryInstance();
    const result = db.deleteById(id);
    result
        .then(() => res.status(200).json({
            message: 'Catégorie supprimé'
        }))

        .catch(err => console.log(err));
}


exports.getAll = (req, res, next) => {
    const db = dbService.getCategoryInstance();
    const result = db.getAll();
    result
        .then(Categories => res.status(200).json(Categories))
        .catch(err => console.log(err));
}


exports.getOne = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    console.log(id);
    const db = dbService.getCategoryInstance();
    const result = db.getOneById(id);
    result
        .then(Category => res.status(200).json(Category))
        .catch(err => console.log(err));
}
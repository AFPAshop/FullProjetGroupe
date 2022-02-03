const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/tva');

exports.getAll = (req, res, next) => {
    // envoie des données au front end 
    const db = dbService.getTvaInstance();
    const result = db.getAll();
    result
        .then(results => {
            res.status(200).send(JSON.stringify(results))
            console.log(results)
        })
        .catch(err => console.log(err));
}

exports.getOne = (req, res, next) => {
    // envoie des données au front end 
    let id = req.params.id;
    console.log(id);
    const db = dbService.getTvaInstance();
    const result = db.getOneById(id);
    result
        .then(Tva => res.status(200).json(Tva))
        .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let nom = req.body.nom;
    let taux = req.body.taux;
    console.log(req.body);
    const db = dbService.getTvaInstance();
    const result = db.insertOne(nom, taux);
    result
        .then(() => res.status(200).json({
            message: 'Tva bien créé'
        }))
        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    let type = req.body.type;
    let taux = req.body.taux;
    console.log(req.body);
    const db = dbService.getTvaInstance();
    const result = db.updateById(id, type, taux);
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
    const db = dbService.getTvaInstance();
    const result = db.deleteById(id);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur supprimé'
        }))

        .catch(err => console.log(err));
}
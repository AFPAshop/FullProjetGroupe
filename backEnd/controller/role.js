const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/user');


exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let prenom = req.body.data.prenom;
    let nom = req.body.data.nom;
    let mdp = req.body.data.password;
    let mail = req.body.data.email;
    let tel = req.body.data.tel;
    console.log(req.body);
    console.log(prenom);
    console.log(nom);
    console.log(mdp);
    console.log(mail);
    console.log(tel);
    const db = dbService.getUserInstance();
    const result = db.insertOne(prenom, nom, mdp, mail, tel);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur bien créé'
        }))

        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    let prenom = req.body.prenom;
    let nom = req.body.nom;
    let mdp = req.body.mdp;
    let mail = req.body.mail;
    let tel = req.body.tel;
    console.log(id);
    console.log(prenom);
    console.log(nom);
    console.log(req.body);
    console.log(mdp);
    console.log(mail);
    console.log(tel);
    const db = dbService.getUserInstance();
    const result = db.updateUserById(id, prenom, nom, mdp, mail, tel);
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
    const db = dbService.getUserInstance();
    const result = db.deleteUserById(id);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur supprimé'
        }))

        .catch(err => console.log(err));
}


exports.getall = (req, res, next) => {
    const db = dbService.getUserInstance();
    const result = db.getAllUser();
    result
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err));
}


exports.getone = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend via axios
    let id = req.params.id;
    console.log(id);
    const db = dbService.getUserInstance();
    const result = db.getOneById(id);
    result
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err));
}
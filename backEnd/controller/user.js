const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/user');


exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend pour création
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let mail = req.body.mail;
    let phone = req.body.phone;
    console.log(req.body);
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(mail);
    console.log(phone);
    const db = dbService.getUserInstance();
    const result = db.insertOne(firstName, lastName, password, mail, phone);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur bien créé'
        }))

        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend pour mise à jour
    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let mail = req.body.mail;
    let phone = req.body.phone;
    const db = dbService.getUserInstance();
    const result = db.updateUserById(id, firstName, lastName, password, mail, phone);
    result
        .then(() => res.status(200).json({
            message: 'Utilisateur mis à jour'
        }))
        .catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend pour delete
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


exports.getAll = (req, res, next) => {
    // envoie de paramètres au frontend
    const db = dbService.getUserInstance();
    const result = db.getAllUser();
    result
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err));
}


exports.getOne = (req, res, next) => {
    // envoie de paramètres au frontend
    let id = req.params.id;
    console.log(id);
    const db = dbService.getUserInstance();
    const result = db.getOneById(id);
    result
        .then(user => res.status(200).json(user))
        .catch(err => console.log(err));
}
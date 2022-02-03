const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const dbService = require('../service/user');
const jwt = require('jsonwebtoken');


exports.create = (req, res, next) => {
    // récupération des paramètres envoyés par le frontend pour création
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let password = req.body.password;
    let mail = req.body.mail;
    let phone = req.body.phone;
    console.log(req.body);
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


exports.login = (req, res, next) => {
    let mail = req.body.mail;
    console.log(mail);
    const db = dbService.getUserInstance();
    const result = db.getOneByMail(mail);
    console.log(req.body)
    result
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    error: 'Utilisateur non trouvé !'
                });
            }
            let userdata = user[0];
            console.log(userdata.password)
            console.log(req.body.password)
            bcrypt.compare(req.body.password, userdata.password)
                .then(valid => {
                    console.log('Validation password')
                    if (!valid) {
                        console.log('Invalid password');
                        return res.status(402).json({
                            error: 'Mot de passe incorrect !'
                        });
                    }
                    console.log('Je suis passé')
                    res.status(200).json({
                        userId: userdata.id,
                        token: jwt.sign({
                                userId: userdata.id,
                                userfirstName: userdata.firstName,
                                userlastName: userdata.lastName,
                                userPhone: userdata.phone,
                                userEmail: userdata.mail,
                                userRole: userdata.id_ROLE
                            },
                            'RANDOM_TOKEN_SECRET', {
                                expiresIn: '24h'
                            }
                        )
                    });
                    console.log('Donnée de l utilisateur :' + userdata);
                })
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(error => res.status(501).json({
            error
        }));
};
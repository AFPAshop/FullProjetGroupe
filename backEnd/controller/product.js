const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/product');


exports.getAll = (req, res, next) => {
    const db = dbService.getProductInstance();
    const result = db.getAll();
    result
        .then(products => res.status(200).json(products))

        .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    console.log(req.body)
    console.log(req.file.filename)
    let title = req.body.title;
    let price = req.body.price;
    let stock = req.body.stock;
    let id_TVA = req.body.id_TVA;
    let id_CATEGORIE = req.body.id_CATEGORIE;
    let image = req.file.filename;
    const db = dbService.getProductInstance();
    const result = db.insertOne(title, price, image, stock, id_TVA, id_CATEGORIE);
    result
        .then(() => res.status(200).json({
            message: 'Produit bien créé'
        }))

        .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    console.log(req.body)
    console.log(req.file.filename)
    let id = req.params.id
    let title = req.body.title;
    let price = req.body.price;
    let stock = req.body.stock;
    let id_TVA = req.body.id_TVA;
    let id_CATEGORIE = req.body.id_CATEGORIE;
    let image = req.file.filename;
    const db = dbService.getProductInstance();
    const result = db.updateProductById(id, title, price, image, stock, id_TVA, id_CATEGORIE);
    result
        .then(() => res.status(200).json({
            message: 'Produit mis à jour'
        }))

        .catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
    console.log(req.body);
    let id = req.params.id;
    console.log(id);
    const db = dbService.getProductInstance();
    const result = db.deleteProductById(id);
    result
        .then(() => res.status(200).json({
            message: 'Produit exterminé'
        }))

        .catch(err => console.log(err));
}
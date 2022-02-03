const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;


class Product {
    static getProductInstance() {
        return instance ? instance : new Product();
    }

    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM produit;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async insertOne(title, price, image, stock, id_TVA, id_CATEGORIE) {
        try {
            await new Promise((resolve, reject) => {
                const query = "INSERT INTO produit (image, title, price, stock, id_TVA, id_CATEGORIE) VALUES (?,?,?,?,?,?);";
                connection.query(query, [image, title, price, stock, id_TVA, id_CATEGORIE], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
            console.log('Produit Ajouté')
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM produit WHERE id = ?";

                connection.query(query, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });

            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateById(id, title, price, image, stock, id_TVA, id_CATEGORIE) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE produit SET title =?, price =?, image=?, stock=?, id_TVA=?, id_CATEGORIE WHERE id = ? ";

                connection.query(query, [title, price, image, stock, id_TVA, id_CATEGORIE, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getOneById(id) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM produit WHERE id = ?;";

                connection.query(query, [id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Product;
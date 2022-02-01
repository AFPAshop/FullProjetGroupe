const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;

class Category {
    static getCategoryInstance() {
        return instance ? instance : new Category();
    }

    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM categorie";
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

    async insertOne(nom, id_parent) {
        try {
            await new Promise((resolve, reject) => {
                if (id_parent == '') {
                    id_parent = 0;
                    console.log(id_parent)
                }
                const query = "INSERT INTO categorie (nom, id_parent) VALUES (?,?)";
                connection.query(query, [nom, id_parent], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
            console.log('categorie Ajouté')
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM categorie WHERE id =" + id;

                connection.query(query, (err, result) => {
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

    async updateById(id, nom, id_parent) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE categorie SET nom = ?, id_parent = ? WHERE id =" + id;

                connection.query(query, [nom, id_parent], (err, result) => {
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
                const query = "SELECT * FROM categorie WHERE id =" + id;

                connection.query(query, (err, results) => {
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

module.exports = Category;
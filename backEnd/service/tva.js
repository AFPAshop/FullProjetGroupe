const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;

class Tva {
    static getTvaInstance() {
        return instance ? instance : new Tva();
    }

    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM tva";
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

    async insertOne(type, taux) {
        try {
            await new Promise((resolve, reject) => {
                const query = "INSERT INTO tva (type, taux) VALUES (?,?)";
                connection.query(query, [type, taux], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
            console.log('Tva Ajouté')
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM tva WHERE id =" + id;

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

    async updateById(id, type, taux) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE tva SET type = ?, taux = ? WHERE id =" + id;

                connection.query(query, [type, taux], (err, result) => {
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
                const query = "SELECT * FROM tva WHERE id =" + id;

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

module.exports = Tva;
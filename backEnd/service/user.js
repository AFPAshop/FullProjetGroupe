const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;

const bcrypt = require('bcrypt');

class User {
    static getUserInstance() {
        return instance ? instance : new User();
    }
    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM utilisateur;";
                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        };
    };
    async insertOne(firstName, lastName, password, mail, phone) {
        bcrypt.hash(password, 10).then((hash) => {
            const query = "INSERT INTO utilisateur (firstName, lastName, password, mail, phone) VALUES (?,?,?,?,?);";
            connection.query(query, [firstName, lastName, hash, mail, phone])
        }).catch(error => console.log(error))
    };
    async deleteById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM utilisateur WHERE id = ?";

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
    async updateById(firstName, lastName, password, mail, phone) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE utilisateur SET (firstName, lastName, password, mail, phone) VALUES (?,?,?,?,?) ";

                connection.query(query, [firstName, lastName, password, mail, phone], (err, result) => {
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
                const query = "SELECT nom_utilisateur FROM utilisateur WHERE id = ?;";

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

module.exports = User;
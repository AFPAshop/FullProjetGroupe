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

    async insertOne(prenom, nom, mdp, mail, tel) {
        bcrypt.hash(mdp, 10).then((hash) => {
            console.log(hash);
            const query = "INSERT INTO utilisateur (prenom, nom_utilisateur, mdp, mail, tel) VALUES (?,?,?,?,?);";
            connection.query(query, [prenom, nom, hash, mail, tel])
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

    async updateById(id, prenom, nom, mdp, mail, tel) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE utilisateur SET prenom=? nom_utilisateur =?, mdp =?, mdp=?, mail=?, tel=? WHERE id = ? ";

                connection.query(query, [prenom, nom, mdp, mail, tel, id], (err, result) => {
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
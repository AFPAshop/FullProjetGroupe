const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;


class Role {
    static getRoleInstance() {
        return instance ? instance : new Role();
    }

    async getAll() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM role;";
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

    async insertOne(type) {
        try {
            await new Promise((resolve, reject) => {
                const query = "INSERT INTO role (type) VALUES (?);";
                connection.query(query, [type], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve();
                })
            });
            console.log('Nouveau rôle créé')
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM role WHERE id = ?";

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

    async updateById(id, type) {
        try {
            id = parseInt(id, 10);
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE role SET type =? WHERE id = ? ";

                connection.query(query, [type, id], (err, result) => {
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
                const query = "SELECT * FROM role WHERE id = ?;";

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

module.exports = Role;
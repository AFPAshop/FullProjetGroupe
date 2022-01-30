const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const conn = require("../dbService");
const connection = conn.connection;

class Bdd {
    static getBddInstance() {
        return instance ? instance : new Bdd();
    }

    async getName() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM db_name";
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
}

module.exports = Bdd;
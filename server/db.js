//create mysql connection
const mysql = require('mysql2/promise');

async function query(sql, params) {
    console.log(sql, params)
    try {
        const con = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "password"
        });

        const [results]  = await con.query(sql, params)

        return results;
    } catch (err) {
        console.log(err)
        throw err
    }
}

module.exports = {
    query,
}
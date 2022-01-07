const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "8800",
    database: "parking_db",
    host: "localhost",
    port: 5432
})

module.exports = pool;
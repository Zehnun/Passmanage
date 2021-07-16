const Pool = require("pg").Pool;
const pool = new Pool({
    user: "myuser",
    password: "123",
    database: "mydb",
    host: "localhost",
    port: 5432
})

module.exports = pool;
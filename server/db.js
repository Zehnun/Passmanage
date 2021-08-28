const Pool = require("pg").Pool;
const pool = new Pool({
    user: "myuser",
    password: "123",
    database: "mydb",
    host: "localhost",
    port: 5432
})
/*
    master password : 1234
    localhost password : postgres
*/
module.exports = pool;
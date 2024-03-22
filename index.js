const fs = require('fs');
const {Pool} = require('pg');

// Read the configuration file
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// Create a new pool instance
const pool = new Pool({
    host: config.database.host,
    port: config.database.port,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password,
})

pool.query('SELECT NOW()', (err,res) => {
    console.log(err,res);
    pool.end();
})
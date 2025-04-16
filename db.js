// db.js - Handles PostgreSQL connection setup

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',             
  database: 'psql -U postgres',     
  password: 'Maybaby2023!',     
  port: 5432,                   
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Current time:', res.rows[0]);
    }
  });
  
  // Export the pool to use in other files
  module.exports = pool;
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'app_freq',
  password: '123456',
  port: 5432
})

module.exports = function() {
  return pool;
}

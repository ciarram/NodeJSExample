var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_murphyci',
  password        : '7902',
  database        : 'cs340_murphyci'
});
module.exports.pool = pool;

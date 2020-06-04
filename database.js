var exports = module.exports = {}
var md5 = require('md5')
var escape = require("sqlstring").escape
var mysql = require('mysql')
var secrets = require('./secrets.js')

exports.connectDb = () => {
    // Setup db
    var connection = mysql.createConnection(secrets.dbcredentials)

    // Connect to db
    connection.connect((err)=> {
    if (err) {
      console.log('[ERR]'.black.bgWhite + ': ' + 'Database connect failed.'.red)
      console.log('       MySQL most likley not running.'.red)
      process.exit();
      //throw err
        
    } else {
        console.log('[STATUS]'.black.bgWhite + ': ' + 'Database connected.'.green)
    } 
        })
    return connection
}

// Query to db.
exports.dbQuery = (query, callback) => {
  connection.query(query, (error, results) => {
    if (error) throw error
    if (results.length > 0) {
      callback(results)
    } else {
      callback([])
    }
  })
}
module.exports = function(app, connection) {

    var secrets = require('./secrets.js')
    var mysql = require('mysql')
    var cookieParser = require('cookie-parser')
    var colors = require('colors')
    var port = secrets.port

    app.use(cookieParser())

    // Index
    app.get('/', (req, res) => res.render('index'));
    var portString = port.toString()

    app.listen(port, () => {
        console.log('[STATUS]'.black.bgWhite + ': ' + "Listening on port ".green + portString.green)
    })
}

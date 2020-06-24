module.exports = function(app,connection) {

    var secrets = require('./secrets.js')
    var mysql = require('mysql')
    var cookieParser = require('cookie-parser')
    const bodyParser = require("body-parser")
    var colors = require('colors')
    var md5 = require('md5')
    var port = secrets.port

    app.use(bodyParser.urlencoded({extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser())

    var users = [];

    app.post('/password',(req,res) => {
        res.token = md5(req.body.pswd)
        res.send({"token": md5(req.body.pswd)})
    });

    // Index
    app.get('/', (req, res) =>  {
        res.render('index')
    })

    app.get('/admin', (req, res) =>  {
        console.log(req.cookies)
        if(req.cookies.token == secrets.adminPswd) {
            res.render('admin')
        }
        else {
            res.render('password')
        }
    })

    var portString = port.toString()

    app.listen(port, () => {
        console.log('[STATUS]'.black.bgWhite + ': ' + "Listening on port ".green + portString.green)
    })
}
class user {

    constructor(ip) {
        this.ip = ip;
        this.visited = 1;
    }
    visited() {
        this.visited++;
    }

}

// Genereal setup
var express = require('express')
var app = express()

// Dependencies
var path = require('path')
var mysql = require('mysql')
var sqlstring = require("sqlstring")
var colors = require('colors')

var db = require('./database.js')

// Setup PUG
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

var connection = db.connectDb()

require('./routes')(app,connection)

var status = 1;

var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,cors = require('cors')
    ,routes = require('../app/routes');

var app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   next();
// });


routes(app);

module.exports = app;

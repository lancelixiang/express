var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/error', function (req, res, next) {
    console.log('error-----------------------------------');
    res.render('error', {message: 'error2222', title: 'Express22222'});
});

router.get('/mysql', function (req, res, next) {
    console.log('mysql---------------------------');
    connection.query('SELECT * FROM  name', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ********', results[1].name);
        res.json(results);
    });

});

module.exports = router;

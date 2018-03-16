var express = require('express');
var router = express.Router();
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://192.168.101.32:8000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
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

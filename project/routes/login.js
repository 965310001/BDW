var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var list = [1, 2, 4, 5, 5, 7, 8];
    res.render('login', {title: 'Express', list: list});
});

module.exports = router;

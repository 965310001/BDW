var express = require("express")
var router = express.Router();

var db = require("../config/db");
var sqlMap = require("../config/sqlMap");

router.get("/login", function (req, res, next) {
    console.log("测试users即可");
    var name = req.query.name;
    var password = req.query.password;
    console.dir(req.query.valueOf())
    var plams = [name = req.query.name, password = req.query.password];
    // console.dir(name + " " + password)
    db.insert(sqlMap.user.login, plams, function (results) {
        // console.dir(results);
        res.send(results);
    })
});


module.exports = router;

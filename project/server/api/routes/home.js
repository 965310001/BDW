var express = require("express")
var router = express.Router();

var db = require("../config/db");
var sqlMap = require("../config/sqlMap");

var banner = require("../data/banner");

/*轮播图*/
router.get("/banner", function (req, res, next) {
    res.send(banner);
});

/*登录*/
router.get("/signin", (req, res, nex) => {
    var phone = req.query.phone;
    var password = req.query.password;
    if (phone.trim() == "") {
        res.send("不能为空")
    } else {
        // res.json({
        //     phone: phone,
        //     password: password
        // })
        res.send(jsonFormat({phone, password}, 0, "登录成功"))
    }
})
const jsonFormat = (data, errorCode, errorMsg) => {
    return JSON.stringify({
        "data": data,
        "errorCode": errorCode,
        "errorMsg": errorMsg
    })
};

module.exports = router;
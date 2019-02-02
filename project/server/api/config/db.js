let mysql = require('mysql');

// var models  = require("config");

var config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'ecshop',
    multipleStatements: true
};

let db = {}

/*获取数据库*/
db.connection = function () {
    let connection = mysql.createConnection(config);
    connection.connect(function (error) {
        if (error) {
            console.log(error)
            return;
        }
    });
    return connection;
}

/*插入数据*/
db.insert = function (sql, plams, callback) {
    db.connection().query(sql, plams, function (error, results, fields) {
        if (error) {
            throw error;
        }
        callback(results);
        db.close(db.connection());
    })
}

/*关闭数据库*/
db.close = function (connection) {
    connection.end(function (error) {
        if (error) {
            return;
        } else {
            console.log("关闭连接");
        }
    })
}

module.exports = db;

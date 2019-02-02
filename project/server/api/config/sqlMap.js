/*SQL语句*/
let sqlMap = {
    user: {
        login: "SELECT * from ecs_users WHERE user_name=? and password =?",
    }
}
module.exports = sqlMap;
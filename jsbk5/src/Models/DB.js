const { Sequelize } = require("sequelize");

const DB = new Sequelize({
    dialect : "mysql",
    host : "localhost",
    port : 3306,
    username : "Edi",
    password : "edi1234",
    database : "User",
    logging : false,
});

module.exports = DB;
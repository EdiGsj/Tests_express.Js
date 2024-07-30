const { Sequelize } = require("sequelize");

const DB = new Sequelize({
    dialect : "sqlite",
    host : "localhost",
    storage: "./src/DB/data/Bank.sqlite",
    port : 3306,
    database : "User",
    logging : false,
});
// const DB = new Sequelize({
//     dialect : "mysql",
//     host : "localhost",
//     port : 3306,
//     username : "Edi",
//     password : "edi1234",
//     database : "User",
//     logging : false, // comentários
// });

module.exports = DB;
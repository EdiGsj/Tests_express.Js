const DB = require("../DB")
const {DataTypes} = require("sequelize")

const Produtos = DB.define('Produtos',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: true,
        autoIncremente: true,
        primaryKey: true
    },
    nome:{
        type:DataTypes.STRING(100),
        allowNull: true

    },
    descricao:{
        type:DataTypes.STRING(352),
        allowNull: true

    },
    valor:{
        type:DataTypes.INTEGER,
        allowNull: true

    },

});

module.exports = Produtos;
const DB = require("../../DB/DB");
const {DataTypes} = require("sequelize");
const User = require('../User/user_tb');
const Produtos = require('../Produto/produto_tb');

const Carrinho = DB.define('Carrinho',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
    }

});

Carrinho.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'});
Carrinho.belongsTo(Produtos, {foreignKey: 'produtoId', onDelete: 'CASCADE'});

module.exports = Carrinho;
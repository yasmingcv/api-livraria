const Sequelize = require('sequelize');

const connection = require('../database/database');

const Categoria = connection.define( // define = create table
    'tbl_categoria',
    {
        codigo_categoria:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria:{
        type: Sequelize.STRING,
        allowNull: false
        }
    }
);

Categoria.sync({force:false}); // force:false -> só cria se não existir, se existir ele não força.

module.exports = Categoria;
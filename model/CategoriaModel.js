const Sequelize = require('sequelize');

const connection = require('../database/database');

const Categoria = connection.define(
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

Categoria.sync({force:false});

module.exports = Categoria;
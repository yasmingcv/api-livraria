const Sequelize = require('sequelize');

const connection = require('../database/database');

const Categoria = require('./CategoriaModel');

const Livro = connection.define(
    'tbl_livro',
    {
        codigo_livro:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        preco:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagem_peq:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagem_grd:{
            type: Sequelize.STRING,
            allowNull: false
        },
        detalhes:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Categoria.hasMany(Livro);

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Livro.belongsTo(Categoria);

Livro.sync({force:false});

module.exports = Livro;
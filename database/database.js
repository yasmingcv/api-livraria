const Sequelize = require('sequelize');

const connection = new Sequelize(
    'api_livraria_bd_t', //nome do banco
    'root', //user
    '12345678', //senha
    { 
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;
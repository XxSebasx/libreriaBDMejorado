const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('LIBRARYBD', 'root', 'MiContraseña2025!', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

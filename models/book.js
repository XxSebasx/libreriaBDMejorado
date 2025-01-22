const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const book = sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ISBN:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
}, {
    tableName: 'books',
    timestamps: true, 
});

module.exports = book;

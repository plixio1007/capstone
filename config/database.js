const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_testing', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
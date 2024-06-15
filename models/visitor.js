const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./event');

const Visitor = sequelize.define('tbl_visitor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    no_phone: {
        type: DataTypes.STRING,
        allowNull:true
    },
    visitor_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    presence: {
        type: DataTypes.STRING,
        allowNull: true
    },
    wish: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_event: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    }
});

module.exports = Visitor;
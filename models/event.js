const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Couple = require('./couple');
const User = require('./user');

const Event = sequelize.define('tbl_event', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    event_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    event_location: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull:true
    },
    id_couple: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Couple,
            key: 'id'
        }
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
}, {
    timestamps: true
});

module.exports = Event;
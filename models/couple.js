const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Couple = sequelize.define('tbl_couple', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    male_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    female_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    male_address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    female_address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    male_instagram: {
        type: DataTypes.STRING,
        allowNull: true
    },
    female_instagram: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    },
}, {
    timestamps: true
});

module.exports = Couple;
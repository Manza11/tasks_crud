const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Task;
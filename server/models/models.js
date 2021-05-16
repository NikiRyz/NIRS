const sequelize = require('../db')
const {DataTypes} = require('sequelize') //для описания типов полей

const User = sequelize.define('admin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})
const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    number: {type: DataTypes.STRING, unique: true},
})

//экспортируем модели
module.exports = {
    User,
    Users
}
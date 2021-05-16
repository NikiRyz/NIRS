const {Sequelize} = require('sequelize') //импортировали sequelize

module.exports = new Sequelize(
    'nirs', // Название БД
    'postgres', // Пользователь
    'root', // ПАРОЛЬ
    {
        dialect: 'postgres',
        port: 5432
    }
)
const ApiError = require('../error/ApiError'); // импортируем класс ошибок
//middleware
//next - следующая функция middleware
module.exports = function (err, req, res, next) {
//проверяем, есть ли такая ошибка в ApiError
    if (err instanceof ApiError) {
//если есть возвращаем текст сообщения
        return res.status(err.status).json({message: err.message})
    }
//если нет - "Непредвиденная ошибка!"
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}
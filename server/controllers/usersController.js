const ApiError = require("../error/ApiError");
const { Users } = require("../models/models");

class UsersController {
  async registration(req, res, next) {
    //получаем из тела запроса почту, пароль, роль
    const name = req.body.name?req.body.name:0
    const number = req.body.number?req.body.number:0
    const password = req.body.password?req.body.password:0
    if (!name || !password||!number) {
      return next(ApiError.badRequest("Некорректные данные"));
    }
    //проверяем, существует ли такой пользователь
    const candidate = await Users.findOne({ where: { number } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким номером уже существует")
      );
    }
    const users = await Users.create({ name:name, number:number, password:password });
    return res.json({ users });
  }
  async getUsers(req, res) {
      const users=await Users.findAll()
    return res.json(users)
  }
}

module.exports = new UsersController();

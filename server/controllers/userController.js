const ApiError = require("../error/ApiError");
const { User } = require("../models/models");

class UserController {
  async registration(req, res, next) {
    //получаем из тела запроса почту, пароль, роль
    const email = req.body.email ? req.body.email : '';
    const password = req.body.password ? req.body.password : '';
    const role = req.body.role ? req.body.role : '';
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    //проверяем, существует ли такой пользователь
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const admin = await User.create({ email, role, password });
    return res.json({ admin });
  }

  async login(req, res, next) {
    console.log(req.body);
    const email = req.body.email ? req.body.email : '';
    const password = req.body.password ? req.body.password : '';
    const admin = await User.findOne({ where: { email } });
    if (!admin) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    if (!password) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    return res.json({ admin });
  }
  async getUser(req, res) {
    const admin = await User.findAll();
    return res.json(admin);
  }
}

module.exports = new UserController();


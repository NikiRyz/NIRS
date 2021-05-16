const express = require("express"); //импортируем express
const PORT = 5000; //указали порт, где будет открываться приложение
const app = express(); //создали объект приложения
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require('./routers/index')
//подключили обработчик ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


app.use(cors())
app.use(express.json());
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port 5000`));
  } catch (e) {
    console.log(e);
  }
};
start();
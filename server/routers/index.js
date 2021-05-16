const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const usersRouter = require("./usersRouter");
router.use("/admin", userRouter);
router.use("/users", usersRouter);

module.exports = router;

const { Router } = require("express");

const usersRouter = require("./users.routes");

const routes = Router(); // Contém todas as rotas da aplicação

routes.use("/users", usersRouter);

module.exports = routes;
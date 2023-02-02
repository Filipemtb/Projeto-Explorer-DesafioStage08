const { Router } = require("express"); 

const UsersController = require("../controllers/UserController");

const usersRoutes = Router();

const usersController = new UsersController(); // Nova instância

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;
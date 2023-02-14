const AppError = require("../utils/AppError");

class UserController {
    create(request, response) {
        const { name, email, password } = request.body;

        if (!name) {
            throw new AppError("O nome é obrigatorio!")
        }
        if (!email) {
            throw new AppError("O email é obrigatorio!")
        }
        if (!password) {
            throw new AppError("A senha  é obrigatorio!")
        }
        response.status(201).json({ name, email, password });
    }
}

module.exports = UserController;
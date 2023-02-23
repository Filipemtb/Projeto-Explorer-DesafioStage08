const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class UserController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (!name) {
            throw new AppError("O nome é obrigatorio!")
        }
        if (!email) {
            throw new AppError("O email é obrigatorio!")
        }
        if (!password) {
            throw new AppError("A senha  é obrigatorio!")
        }
        if(checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        } 

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

        return response.status(201).json("Usuário cadastrado!");


        response.status(201).json({ name, email, password });
    }
}

module.exports = UserController;
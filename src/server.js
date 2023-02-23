require("express-async-errors");

const database = require("./database/sqlite");

const AppError = require("./utils/AppError");

const express = require("express");  //Importando o express do Node_modules

const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

database()

// Extraindo error por parte do cliente
app.use(( error, request, respose, next ) => {
    if(error instanceof AppError) {
        return respose.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    // Extraindo error por parte do servidor
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });

});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
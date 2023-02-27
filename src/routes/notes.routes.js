const { Router } = require("express"); 

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController(); // Nova instância

notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;
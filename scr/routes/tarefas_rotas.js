const express = require("express");
const rota = express.Router();

const controle = require('../controllers/tarefa_controle');

//Definir rotas
rota.get("/sobre", controle.mostrarTarefas);
rota.get("/buscarId", controle.buscarId);
rota.post("/tarefasFeitas", controle.mostrarCompletas);
rota.post("/sobre", controle.criarTarefa);
rota.delete("/sobre", controle.deletarTarefa);
rota.put("/sobre", controle.alterarTarefas);
//rota.get("/", controle.paginaInicial);

module.exports = rota;
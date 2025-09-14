// Implementa o req, res e os relaciona com as funções do modelo
// Neste arquivo são passados os parâmetros para as funções com base nas requisições. Também são feitos os caminhos para erro, enviados respostas.

const modelo = require("../models/tarefas_modelo")

//Página inicial??

const mostrarTarefas = (req,res) => {
    const tarefas = modelo.mostrarTarefas()
    res.json(tarefas)
}

const buscarId = (req, res) =>{
    const id = parseInt(req.query.id); // parseInt -> Converte str em int; query -> get /?id=
    const tarefa = modelo.buscarId(id);
    if (!id) { 
        res.status(400).json({erro: "tarefa não encontrada"})
    }
    res.json(tarefa)
}

const mostrarCompletas = (req, res) =>{
    const feito = !!parseInt(req.body.feito) //!! -> Bool; parseInt -> Int
    const tarefas = modelo.mostrarCompletas(feito)
    if (tarefas.length === 0){ // Verifica se a lista está vazia (tarefass sempre retorna uma lista)
        res.status(400).json("Nenhuma Tarefa encontrada com essas especificações");
    }

    res.json(tarefas);
}

const criarTarefa = (req,res) => {
    const tarefa = modelo.criarTarefa(req.body);
    res.status(201).json(tarefa);
}

const deletarTarefa = (req, res) => {
    const tarefa = modelo.deletarTarefa(req.body.id)
    if (!tarefa){
        res.status(400).json({erro: "Tarefa não encontrada"})
    }
    res.status(204);
}

const alterarTarefas = (req, res) => {
    const tarefas = modelo.alterarTarefas(req.body);
    res.status(201).json(tarefas);
}

module.exports = {alterarTarefas, deletarTarefa, buscarId, mostrarCompletas, mostrarTarefas, criarTarefa};
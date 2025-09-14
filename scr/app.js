//Faz todas as importações do node-modules para a constante "app"
//São as primeiras linhas do index.js

const express = require("express");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method")); //Habilita o método para PUT e DELETE

app.use(express.json()) // Permite a interpretação em JSON
app.use(express.urlencoded({ extended: true })); //Permite a interpretação no padrão HTML

//Relacionado a pasta view (onde está o HTML)
const path = require('path');
app.use(express.static(path.join(__dirname, 'view')));

//Rotas
const rotas = require("./routes/tarefas_rotas");
app.use("/", rotas);

module.exports = app; // exporta app, permitindo seu uso em outros arquivos quando o arquivo for requerido
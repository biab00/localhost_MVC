// Estabelecer a ligação e criação do localhost
//são as últimas linhas do index.js

const app = require("./scr/app")

const PORT = process.env.PORT || 3000;
// essa linha deveria pegar o valor de alguma porta disponível ou hospedar o server na porta 3000


app.listen(PORT, ()=>{
    console.log("Servidor aberto em http://localhost:3000")
})
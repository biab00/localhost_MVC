// Todas as interações com o banco de dados
// Neste caso, o modelo é responsável por armazenar a lista "tarefas" e por gerenciar qualquer alteração que seja feita nela (criar as funções para deletar, alterar ou adicionar).

//Todas as funções do index.js, entretanto não utiliza req ou res, função é uma variável e não há o caminho para erro

const tarefas = [{id: 1, nome: "Caminhar", feito: false}, {id: 2, nome:"Plantar batata", feito: true}]

const mostrarTarefas = () => tarefas; // const mostrarTarefas = function(){return tarefas;}

const criarTarefa = (dados) => {
// ---- Função para atribuir ids em ordem
    let t = 1;
    let id = tarefas.length + 1;
    for(var i = 0; i<tarefas.length;i++){
        if(tarefas[i].id != t){
            id = t;
            break;
        }
        t++;
    }
//Criar nova tarefa de fato
    const nova = {id: id, nome: dados.nome, feito: false}
    tarefas.push(nova);
    tarefas.sort((a,b)=>a.id - b.id); //Ordena em ordem crescente pelo id.
    return tarefas;
};

const mostrarCompletas = (feito) => tarefas.filter(p => p.feito === feito)

const buscarId = (id) => tarefas.find(p => p.id === id)

const alterarTarefas = (dados) => {
    //Iteração para mudar o nome e o feito de acordo com o id
    for(var i = 0; i < tarefas.length; i++){
        if (tarefas[i].id == dados.id){
            tarefas[i].nome = dados.nome;
            tarefas[i].feito = dados.feito;
            break;
        }
    }
    return tarefas;
};

const deletarTarefa = (id) =>{
    for(var i = 0; i < tarefas.length; i++){
        if (tarefas[i].id == id){
            tarefas.splice(i,1);
            break;
        } 
    }
    return tarefas;
}

module.exports = {criarTarefa, deletarTarefa, mostrarTarefas, buscarId, alterarTarefas, mostrarCompletas}

// Funções simplificadas (enxuto) em síntese.
//nos dois casos p é um parâmetro de uma função de apoio

// filter -> Retorna todas as ocorrências; find -> retorna apenas a primeira
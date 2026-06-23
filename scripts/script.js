let gerenciador = {
    tarefas: [],

    adicionar: function(titulo, prioridade){

    },

    concluir: function(id){

    },

    remover: function(id){

    },

    filtrar: function(tipo){

    },

    atualizarContadores: function(){

    },
}

let proximoID = 1
let filtroAtivo = 'todas'

function renderizar(lista){

    let areaMostrarTarefa = document.getElementById("mostrar-tarefas")

    areaMostrarTarefa.innerHTML = ''
   
    for(let i = 0; i < lista.length; i++){

        let novaTarefa = document.createElement('div')
        let tituloNovaTarefa = document.createTextNode(lista[i].titulo)

        novaTarefa.appendChild(tituloNovaTarefa)

        let spanBadge = document.createElement('span')
        let spanTexto = document.createTextNode(lista[i].prioridade)

        if(lista[i].prioridade == 'Alta'){

            spanBadge.style.color = '#FF4757'

        } else if(lista[i].prioridade == 'Média'){

            spanBadge.style.color = '#FFA502'

        } else{

            spanBadge.style.color = '#2ED573'

        }

        spanBadge.appendChild(spanTexto)

        novaTarefa.appendChild(spanBadge)

        areaMostrarTarefa.appendChild(novaTarefa)
    }

}
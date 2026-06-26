let gerenciador = {
    tarefas: [],

    adicionar: function(titulo, prioridade){
        let cxTitulo = document.getElementById("ititulo")
        let valorTitulo = cxTitulo.value
        let prioridadeSelecionada = document.querySelector('input[name="prioridade"]:checked')

        if(valorTitulo === '' || prioridadeSelecionada === null){
            alert("Preencha os campos titulo e prioridade")
            return
        }

        let tarefa = {
            id: proximoID,

            titulo: valorTitulo,

            prioridade: prioridadeSelecionada.value,
            
            concluida: false,

            criadaEm: new Date()
        }

        this.tarefas.push(tarefa)

        proximoID ++

        cxTitulo.value = ''

        renderizar(this.tarefas)
        this.atualizarContadores()
    },

    concluir: function(id){
        for(let i = 0; i < this.tarefas.length; i++){
           
            if(this.tarefas[i].id == id){
                
                this.tarefas[i].concluida = true
            
            }
        }

        renderizar(this.tarefas)
        this.atualizarContadores()
    },

    remover: function(id){
        let novaLista = []

        for(let i = 0; i < this.tarefas.length; i++){

            if(this.tarefas[i].id != Number(id)){
                novaLista.push(this.tarefas[i])
            }

        }

        this.tarefas = novaLista
        renderizar(this.tarefas)
        this.atualizarContadores()
    },

    filtrar: function(tipo){
        let listaFiltrada = []
        filtroAtivo = tipo

        for(let i = 0; i < this.tarefas.length; i++){

            if(tipo == 'todas'){

                listaFiltrada.push(this.tarefas[i])

            } else if(tipo == 'pendentes'){

                if(this.tarefas[i].concluida == false){
                    listaFiltrada.push(this.tarefas[i])
                }

            } else if(tipo == 'concluidas'){

                if(this.tarefas[i].concluida == true){
                    listaFiltrada.push(this.tarefas[i])
                }

            } else{
               if(this.tarefas[i].prioridade == tipo){
                listaFiltrada.push(this.tarefas[i])
               }
            }

        }

        renderizar(listaFiltrada)
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

        if(lista[i].prioridade == 'Alta' || lista[i].prioridade == 'alta'){

            spanBadge.style.color = '#FF4757'

        } else if(lista[i].prioridade == 'Média' || lista[i].prioridade == 'media' ){

            spanBadge.style.color = '#FFA502'

        } else{

            spanBadge.style.color = '#2ED573'

        }

        spanBadge.appendChild(spanTexto)

        let botaoConcluir = document.createElement("button")
        let botaoRemover = document.createElement("button")
        let textoConcluir = document.createTextNode('Concluir')
        let textoRemover = document.createTextNode("Remover")

        botaoConcluir.appendChild(textoConcluir)
        botaoRemover.appendChild(textoRemover)

        botaoConcluir.addEventListener('click', function(){

            gerenciador.concluir(lista[i].id)

        })

        botaoRemover.addEventListener('click', function(){

            gerenciador.remover(lista[i].id)
        })

        novaTarefa.appendChild(botaoConcluir)
        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(spanBadge)

        areaMostrarTarefa.appendChild(novaTarefa)
    }

}


document.getElementById('btn-adicionar').addEventListener('click', function(){
    gerenciador.adicionar()
})
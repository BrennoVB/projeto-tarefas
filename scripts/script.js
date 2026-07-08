let gerenciador = { // variável principal do codigo, onde temos os metodos que faz o HTML funcionar com a interação perfeitamente
    tarefas: [],

    adicionar: function(titulo, prioridade){ // nesse metodo é onde adicionamos as tarefas com seu titulo e nivel de prioridade
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
        atualizarTimers()
        this.atualizarContadores()
    },

    concluir: function(id){ // metodo onde a tarefa é concluída 
        for(let i = 0; i < this.tarefas.length; i++){
           
            if(this.tarefas[i].id == id){
                
                this.tarefas[i].concluida = true
            
            }
        }

        renderizar(this.tarefas)
        this.atualizarContadores()
    },

    remover: function(id){  // metodo onde a tarefa é removida
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

    filtrar: function(tipo){ // metodo que filtra as tarefas por status (pendentes/concluídas) ou por nível de prioridade
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
        this.atualizarContadores()
    },

    atualizarContadores: function(){ // metodo onde atualiza o total de cada tipo de tarefa e mostra ao usuario
        let totalTarefas = this.tarefas.length
        let totalTarefasPendentes = 0
        let totalTarefasConcluidas = 0
        let estatisticaTotal = document.getElementById("estatistica-total")
        let estatisticaPendentes = document.getElementById('estatistica-pendentes')
        let estatisticaConcluidas = document.getElementById("estatistica-concluidas")

        for(let i = 0; i < this.tarefas.length; i++){

            if(this.tarefas[i].concluida == false){
                totalTarefasPendentes++
            }

        }


        for(let i = 0; i < this.tarefas.length; i++){

            if(this.tarefas[i].concluida == true){
                totalTarefasConcluidas++
            }

        }

        estatisticaTotal.textContent = 'Total: ' + totalTarefas
        estatisticaPendentes.textContent = 'Pendentes: ' + totalTarefasPendentes
        estatisticaConcluidas.textContent = 'Concluidas: ' + totalTarefasConcluidas

    },
}

let proximoID = 1
let filtroAtivo = 'todas'

function atualizarTimers(){ // função que mostra o tempo em que a tarefa foi criada
    let tempoDecorrido
    for(let i = 0; i < gerenciador.tarefas.length; i++){

        tempoDecorrido = new Date()- gerenciador.tarefas[i].criadaEm

        tempoDecorrido = Math.floor(tempoDecorrido / 1000)

        let spanTimer = document.getElementById('timer-' + gerenciador.tarefas[i].id)

        if(spanTimer){
            spanTimer.textContent = 'Criada a: ' + tempoDecorrido + 's'

        }

}
}

function renderizar(lista){ // função principal que mostra toda a lista de tarefas seja ela por qualquer tipo de filtro, ou algum em especifico

    let areaMostrarTarefa = document.getElementById("mostrar-tarefas")

    areaMostrarTarefa.innerHTML = ''
   
    for(let i = 0; i < lista.length; i++){

        let novaTarefa = document.createElement('div')
        let tituloNovaTarefa = document.createTextNode(lista[i].titulo)

        novaTarefa.setAttribute('class', 'card-tarefa')
        novaTarefa.appendChild(tituloNovaTarefa)

        let spanBadge = document.createElement('span')
        let spanTexto = document.createTextNode(lista[i].prioridade)
        let spanTimer = document.createElement('span')

        spanTimer.setAttribute('id', 'timer-' + lista[i].id)

        if(lista[i].prioridade == 'Alta' || lista[i].prioridade == 'alta'){

            spanBadge.style.color = '#FF4757'

        } else if(lista[i].prioridade == 'Média' || lista[i].prioridade == 'media' ){

            spanBadge.style.color = '#FFA502'

        } else{

            spanBadge.style.color = '#2ED573'

        }

        spanBadge.style.marginRight = '10px'

        spanBadge.appendChild(spanTexto)

        let botaoConcluir = document.createElement("button")
        let botaoRemover = document.createElement("button")
        let textoConcluir = document.createTextNode('Concluir')
        let textoRemover = document.createTextNode("Remover")

        botaoConcluir.appendChild(textoConcluir) 
        botaoRemover.appendChild(textoRemover)

        botaoConcluir.setAttribute('class', 'btn-concluir')
        botaoRemover.setAttribute('class', 'btn-remover')

        botaoConcluir.addEventListener('click', function(){

            gerenciador.concluir(lista[i].id)

        })

         if(lista[i].concluida == true){
                botaoConcluir.setAttribute('disabled', 'disabled')
            }

        botaoRemover.addEventListener('click', function(){

            gerenciador.remover(lista[i].id)
        })

        
        let divTopo = document.createElement('div')
        divTopo.appendChild(tituloNovaTarefa)
        divTopo.appendChild(spanBadge)


        let divBotoes = document.createElement('div')
        divBotoes.appendChild(botaoConcluir)
        divBotoes.appendChild(botaoRemover)

        divTopo.style.display = 'flex'
        divTopo.style.alignItems = 'center'
        divTopo.style.gap = '10px'

        divBotoes.style.display = 'flex'
        divBotoes.style.gap = '10px'
        divBotoes.style.marginTop = '8px'
        divBotoes.style.flexWrap = 'wrap'

        novaTarefa.appendChild(divTopo)
        novaTarefa.appendChild(divBotoes)
        novaTarefa.appendChild(spanTimer)

        areaMostrarTarefa.appendChild(novaTarefa)
    }

}


document.getElementById('btn-adicionar').addEventListener('click', function(){  
    gerenciador.adicionar()
})

document.getElementById('btn-todas').addEventListener('click', function(){ 
    gerenciador.filtrar('todas')
})

document.getElementById('btn-pendentes').addEventListener('click', function(){
    gerenciador.filtrar('pendentes')
})

document.getElementById('btn-concluidas').addEventListener('click', function(){
    gerenciador.filtrar('concluidas')
})

document.getElementById('btn-alta').addEventListener('click', function(){
    gerenciador.filtrar('alta')
})

document.getElementById('btn-media').addEventListener('click', function(){
    gerenciador.filtrar('media')
})

document.getElementById('btn-baixa').addEventListener('click', function(){
    gerenciador.filtrar('baixa')
})

setInterval(atualizarTimers, 1000) // chama atualizarTimers a cada 1 segundo para manter o timer atualizado
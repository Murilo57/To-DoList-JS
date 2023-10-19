const button = document.querySelector('.button-add-task')
const input  = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((tarefa, index) => {

        novaLi = novaLi + `
            <li class="task">
                <img src="assets/checked.png" alt="Checked-na-tarefa">
                <p>${tarefa}</p>
                <img src="assets/trash.png" alt="Lixeira" onclick="deletarItem(${index})">                
            </li>            
        `
    })

    listaCompleta.innerHTML = novaLi

}

function concluirTarefa() {
    
}


function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)

    mostrarTarefas()
}

button.addEventListener('click', adicionarNovaTarefa)
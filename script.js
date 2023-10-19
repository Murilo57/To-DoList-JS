const button = document.querySelector('.button-add-task')
const input  = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach( tarefa => {

        novaLi = novaLi + `
            <li class="task">
                <img src="assets/checked.png" alt="Checked-na-tarefa">
                <p>${tarefa}</p>
                <img src="assets/trash.png" alt="Lixeira">                
            </li>            
        `
    })

    listaCompleta.innerHTML = novaLi

}

button.addEventListener('click', adicionarNovaTarefa)
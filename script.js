const button = document.querySelector('.button-add-task')
const input  = document.querySelector('.input-task')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi

    // <li class="task">
    //             <img src="assets/checked.png" alt="Checked-na-tarefa">
    //             <p>Aprender JS</p>
    //             <img src="assets/trash.png" alt="Lixeira">                
    //         </li>    

}

button.addEventListener('click', adicionarNovaTarefa)
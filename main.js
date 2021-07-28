import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

    const criarTarefa = (evento) => {
        //o formulário não recarrega a página
        evento.preventDefault()

        //adquire o <ul> da página
        const lista = document.querySelector('[data-list]')

        //adquire o <input>
        const novoInput = document.querySelector('[data-form-input]')
        //adquire o valor do <input>
        const valor = novoInput.value

        //cria uma <li> no DOM
        const tarefa = document.createElement('li')
        //adiciona a classe 'task' na <li>
        tarefa.classList.add('task')
        
        //adquire um <p> como conteúdo
        const conteudo = `<p class="content">${valor}</p>`
        //inclui o <p> como conteúdo da <li>
        tarefa.innerHTML = conteudo

        //concatena o <button> criado no método BotaoConclui() no conteúdo da <li>
        tarefa.appendChild(BotaoConclui())
        //concatena o <button> criado no método BotaoDeleta() no contepudo da <li>
        tarefa.appendChild(BotaoDeleta())

        //concatena a <li> no <ul>
        lista.appendChild(tarefa)

        //limpa valor do <input>
        novoInput.value = ''
    }

    //adquire o <button> NOVO ITEM
    const novaTarefa = document.querySelector('[data-form-button]')
    //espera evento 'click' no <button>
    novaTarefa.addEventListener('click', criarTarefa)
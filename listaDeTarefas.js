( () => {
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

    //cria o botão de concluir
    const BotaoConclui = () => {
        //cria um <button> no DOM
        const botaoConclui = document.createElement('button')
        //inclui classe CSS 'check-button' no <button> da <li>
        botaoConclui.classList.add('check-button')
        //inclui o texto 'concluir' no <button> da <li>
        botaoConclui.innerText = 'concluir'
        //espera evento 'click' no <button>
        botaoConclui.addEventListener('click', concluirTarefa)

        //retorna o <button>
        return botaoConclui
    }


    //risca a tarefa
    const concluirTarefa = (evento) => {
        //adquite o alvo do evento
        const botaoConclui = evento.target
        //adquire o elemento pai do alvo do evento
        const tarefaCompleta = botaoConclui.parentElement
        //verifica se o elemento pai do alvo tem a classe CSS 'done', se não ele inclui, se sim retira
        tarefaCompleta.classList.toggle('done')
    }

    //excluir tarefa
    const BotaoDeleta = () => {
        //cria um <button> no DOM
        const botaoDeleta = document.createElement('button')
        //inclui o texto 'concluir' no <button>
        botaoDeleta.innerText = 'deletar'
        //evento no botao
        botaoDeleta.addEventListener('click', deletarTarefa)
        //retorna o <button> criado
        return botaoDeleta
    }

    const deletarTarefa = (evento) =>{
        //adquire o alvo do evento
        const botaoDeleta = evento.target
        //adquire o elemento pai do alvo
        const tarefaCompleta = botaoDeleta.parentElement
        //remove o elemento pai do alvo
        tarefaCompleta.remove()
    }
})()
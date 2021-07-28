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

export default BotaoConclui
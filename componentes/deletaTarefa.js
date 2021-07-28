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

export default BotaoDeleta
const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const novoInput = document.querySelector('[data-form-input]');
    const valor = novoInput.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());

    lista.appendChild(tarefa);

    novoInput.value = '';
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    
}
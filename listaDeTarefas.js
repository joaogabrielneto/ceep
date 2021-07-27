const criarTarefa = (evento) => {
    evento.preventDefault();
    const novoInput = document.querySelector('[data-form-input]');
    const valor = novoInput.value;
    console.log( valor );
    novoInput.value = ''
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


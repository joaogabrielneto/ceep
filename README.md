# CEEP
Este repositório consiste de um estudo em JavaScript. Este projeto foi desenvolvido ao longo do curso "JS na Web: Manipule o DOM com JavaScript" e tem a função de listar tarefas.

# IMPORTANTE
Neste projeto o foco é trabalhar com JavaScript, portanto todo o HTML e CSS deste repositório vem dos arquivos iniciais do curso e pelos exemplos do instrutor, o único código escrito e explicado durante o curso foram os scrips do arquivo "listaDeTarefas.js".


# COMO RODAR LOCALMENTE

<!--ts-->
 * [Clone este repositório: git clone git@github.com:joaogabrielneto/ceep.git] 
 * [Instale o Live Server]
    * [Com o npm, instale o Liver Server com " npm -g install live-server " e execute-o na pasta do projeto]
    * [Ou se usar o VSCode, instale a extenção Live Server do autor Ritwick Dey, execute a extenção]
<!--te-->

# CONCEITOS, MÉTODOS E PALAVRAS RESERVADAS APRENDIDOS AO LONGO DESTE CURSO

- const // cria uma constante (é possível criar uma constante que recebe uma função)

- data attributes: https://cursos.alura.com.br/data-attributes-do-html5-c109
- template string: `` // interpolar HTML com JavaScript, ao utiliza algum scrip usar ${}

- document.querySelector('seletor') // percorre o DOM e encontra o elemento informado
- document.querySelectorAll('seletor') // devolve todos os seletores com o mesmo nome
- document.getElementById(‘id’) // seleciona o elemento pelo id passado
- document.getElementsByClassName(‘classe’) // retorna um array dos elementos pelo nome da classe passada
- document.getElementsByTagName(‘tag’) // retorna um array dos elementos pelo nome da tag passada
- document.createElement('') // cria o elemento informado

- .innerHTML =  // acessa o elemento indicado e adiciona conteudo
- .target // adquire o elemento alvo do evento

- .addEventListener('', ) // método para esperar uma ação em determinado objeto ('ação', o que fazer)
- .classList // permite manipular a classe CSS de um elemento no DOM
- .parentElement // adquire o elemento pai do elemento informado
- .appendChild() // inclui elemento filho em um elemento pai
- .removeChild(elemento) // Remove um nó da árvore
- .replaceChild( elemento1, elemento2) // Substitui o nó elemento1 pelo nó elemento2
- .remove // remove este nó da árvore
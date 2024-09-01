function mostrarSecao(secaoId) {
    // oculta todas os textos, após clicar no botão e ir para a próxima página
    var secoes = document.getElementsByClassName('conteudo');
    for (var i = 0; i < secoes.length; i++) {
        secoes[i].style.display = 'none';
    }
    
    // exibe o conteúdo selecionado
    document.getElementById(secaoId).style.display = 'block';
}
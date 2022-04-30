
var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudar_jogador('X');

function escolher_quadrado(id){
    console.log('Clicou no botão');
    console.log(id);

    var quadrado = document.getElementById(id)
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
}

function mudar_jogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML  = jogador;
}
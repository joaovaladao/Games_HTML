
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudar_jogador('X');

function escolher_quadrado(id){
    console.log('Clicou no botão');
    console.log(id);

    var quadrado = document.getElementById(id)

    if(quadrado.innerHTML !== '-'){
        return;
    }

    if(vencedor !== null){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X'){
        jogador = 'O';
    }
    else {
        jogador = 'X';
    }

    mudar_jogador(jogador);
    checa_vencedor();
}

function mudar_jogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML  = jogador;
}

function checa_vencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checha_sequencia(quadrado1,quadrado2,quadrado3)){
        muda_cor(quadrado1, quadrado2, quadrado3);
        define_vencedor(quadrado1);
        return;
    }

    if(checha_sequencia(quadrado4,quadrado5,quadrado6)){
        muda_cor(quadrado4,quadrado5,quadrado6);
        define_vencedor(quadrado4);
        return;
    }

    if(checha_sequencia(quadrado7,quadrado8,quadrado9)){
        muda_cor(quadrado7,quadrado8,quadrado9);
        define_vencedor(quadrado7);
        return;
    }

    if(checha_sequencia(quadrado1,quadrado4,quadrado7)){
        muda_cor(quadrado1,quadrado4,quadrado7);
        define_vencedor(quadrado1);
        return;
    }

    if(checha_sequencia(quadrado2,quadrado5,quadrado8)){
        muda_cor(quadrado2,quadrado5,quadrado8);
        define_vencedor(quadrado2);
        return;
    }

    if(checha_sequencia(quadrado3,quadrado6,quadrado9)){
        muda_cor(quadrado3,quadrado6,quadrado9);
        define_vencedor(quadrado3);
        return;
    }

    if(checha_sequencia(quadrado1,quadrado5,quadrado9)){
        muda_cor(quadrado1,quadrado5,quadrado9);
        define_vencedor(quadrado1);
        return;
    }

    if(checha_sequencia(quadrado3,quadrado5,quadrado7)){
        muda_cor(quadrado3,quadrado5,quadrado7);
        define_vencedor(quadrado3);
        return;
    }
}

function checha_sequencia(quadrado1, quadrado2, quadrado3){
    var e_igual = false;

    if(quadrado1.innerHTML !== '-'){
        if(quadrado1.innerHTML === quadrado3.innerHTML && quadrado1.innerHTML === quadrado2.innerHTML){
            e_igual = true;
        }
    }
    return e_igual;
}

function muda_cor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.color = '#00ff00';
    quadrado2.style.color = '#00ff00';
    quadrado3.style.color = '#00ff00';

    quadrado1.style.background = '#000';
    quadrado2.style.background = '#000';
    quadrado3.style.background = '#000';
}

function define_vencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i<=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudar_jogador('X');
}
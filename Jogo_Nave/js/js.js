function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2' ></div>");
	$("#fundoGame").append("<div id='inimigo2' ></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    var jogo = {};
    jogo.timer = setInterval(loop,30);

    var TECLA = {
        W: 87,
        S: 83,
        space: 8
    }
    jogo.pressionou = [];

    //Velocidades dos personagens
    var velocidade_inimigo1 = 5;
    var velocidade_inimigo2 = 3;
    var velocidade_amigo = 1;

    var pos_y = parseInt(Math.random() * 335);

    //Verifica se o usuário pressionou alguma tecla		
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });
    
    
    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    function loop(){
        movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
    }

    function movefundo(){
        pos = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",pos-1);
    }

    function movejogador(){
        if(jogo.pressionou[TECLA.W]){
            var top = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",top-10);

            if(top <= 0){
                $("#jogador").css("top",top+10);
            }
        }

        else if(jogo.pressionou[TECLA.S]){
            var top = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",top+10);

            if(top >= 435){
                $("#jogador").css("top",top-10);
            }
        }
    }

    function moveinimigo1(){
        pos_x = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", pos_x - velocidade_inimigo1);
        $("#inimigo1").css("top", pos_y);

        if(pos_x <= 0){
            pos_y = parseInt(Math.random() * 335);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", pos_y);
        }
    }

    function moveinimigo2(){
        pos_x = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", pos_x - velocidade_inimigo2);

        if(pos_x <= 0){
            $("#inimigo2").css("left", 775);
        }
    }

    function moveamigo(){
        pos_x = parseInt($("#amigo").css("left"));
        $("#amigo").css("left", pos_x + velocidade_amigo);

        if(pos_x >= 906){
            $("#amigo").css("left", 0);
        }
    }
    

} // Fim da função start

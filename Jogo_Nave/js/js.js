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

    var velocidade = 5;
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
        $("#inimigo1").css("left", pos_x - velocidade);
        $("#inimigo1").css("top", pos_y);

        if(pos_x <= 0){
            pos_y = parseInt(Math.random() * 335);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", pos_y);
        }
    }
    

} // Fim da função start

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
    }

    function movefundo(){
        pos = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",pos-1);
    }

    function movejogador(){
        if(jogo.pressionou[TECLA.W]){
            var top = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",top-10);
        }

        else if(jogo.pressionou[TECLA.S]){
            var top = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",top+10);
        }
    }
    

} // Fim da função start

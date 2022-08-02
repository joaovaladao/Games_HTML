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
        space: 32
    }
    jogo.pressionou = [];

    //Velocidades dos personagens
    var velocidade_inimigo1 = 5;
    var velocidade_inimigo2 = 3;
    var velocidade_amigo = 1;

    var pos_y = parseInt(Math.random() * 335);

    var verifica_disparo = true;
    var fimdejogo=false;

    //Verifica se o usuário pressionou alguma tecla		
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });
    
    
    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    function loop(){
        movefundo();
        acaojogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
        colisao();
    }

    function movefundo(){
        pos = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",pos-1);
    }

    function acaojogador(){
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

        if(jogo.pressionou[TECLA.space]){
            disparo();
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

    function disparo(){
        if(verifica_disparo == true){
            verifica_disparo = false;

            pos_helic_y = parseInt($("#jogador").css("top"));
            pos_helic_x = parseInt($("#jogador").css("left"));

            pos_disparo_y = pos_helic_y + 39;
            pos_disparo_x = pos_helic_x + 190;

            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top",pos_disparo_y);
            $("#disparo").css("left",pos_disparo_x);

            var tempoDisparo=window.setInterval(executaDisparo, 30);
        }

        function executaDisparo(){
            pos_x = parseInt($("#disparo").css("left"));
            $("#disparo").css("left", pos_x + 15);

            if(pos_x >= 900){
                window.clearInterval(tempoDisparo);
                $("#disparo").remove();
                verifica_disparo = true;
            }
        }
    }

    function colisao() {
        //Colisão do inimigo com o jogador
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));
            
            if (colisao1.length>0) {
                console.log("colisão1");
                
                inimigo1X = parseInt($("#inimigo1").css("left"));
                inimigo1Y = parseInt($("#inimigo1").css("top"));
                explosao1(inimigo1X,inimigo1Y);
            
                pos_y = parseInt(Math.random() * 335);
                $("#inimigo1").css("left", 694);
                $("#inimigo1").css("top", pos_y);
            }

            if (colisao2.length>0) {
                console.log("colisão2");
	
                inimigo2X = parseInt($("#inimigo2").css("left"));
                inimigo2Y = parseInt($("#inimigo2").css("top"));
                explosao2(inimigo2X,inimigo2Y);
                        
                $("#inimigo2").remove();
                    
                reposicionaInimigo2();  
            }

            if (colisao3.length>0) {
                console.log("colisão3");
		
                inimigo1X = parseInt($("#inimigo1").css("left"));
                inimigo1Y = parseInt($("#inimigo1").css("top"));
                    
                explosao1(inimigo1X,inimigo1Y);
                $("#disparo").css("left",950);
                    
                pos_y = parseInt(Math.random() * 335);
                $("#inimigo1").css("left", 694);
                $("#inimigo1").css("top", pos_y);
                // console.log(pos_y);
                    
                }

            if (colisao4.length>0) {
                console.log("colisão4");

                inimigo2X = parseInt($("#inimigo2").css("left"));
                inimigo2Y = parseInt($("#inimigo2").css("top"));
                $("#inimigo2").remove();
            
                explosao2(inimigo2X,inimigo2Y);
                $("#disparo").css("left",950);
                
                reposicionaInimigo2();
                    
            }

            if (colisao5.length>0) {
                console.log("colisão5");
		
                reposicionaAmigo();
                $("#amigo").remove();
            }

            if (colisao6.length>0) {
                console.log("colisão6");

                amigoX = parseInt($("#amigo").css("left"));
                amigoY = parseInt($("#amigo").css("top"));
                explosao3(amigoX,amigoY);
                $("#amigo").remove();
                        
                reposicionaAmigo();
                        
                }
        
        }

    function explosao1(inimigo1X,inimigo1Y) {
        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(imgs/explosao.png)");
        var div=$("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao=window.setInterval(removeExplosao, 1000);
        
            function removeExplosao() {
                
                div.remove();
                window.clearInterval(tempoExplosao);
                tempoExplosao=null;
                
            }
            
    }

    function explosao2(inimigo2X,inimigo2Y) {

        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(imgs/explosao.png)");
        var div2=$("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
        
            function removeExplosao2() {
                
                div2.remove();
                window.clearInterval(tempoExplosao2);
                tempoExplosao2=null;
                
            }

    }

    function explosao3(amigoX,amigoY) {

        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top",amigoY);
        $("#explosao3").css("left",amigoX);

        var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);

            function resetaExplosao3() {

                $("#explosao3").remove();
                window.clearInterval(tempoExplosao3);
                tempoExplosao3=null;
                    
            }
        
    }

    function reposicionaInimigo2() {

        var tempoColisao4=window.setInterval(reposiciona4, 5000);
            
            function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4=null;
                
                if (fimdejogo==false) {
                
                $("#fundoGame").append("<div id=inimigo2></div");
                
                }
                
            }	
    }

    function reposicionaAmigo() {
	
        var tempoAmigo=window.setInterval(reposiciona6, 6000);
        
            function reposiciona6() {
                window.clearInterval(tempoAmigo);
                tempoAmigo=null;
                
                if (fimdejogo==false) {
                
                $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
                
                }
            
            }
        
    }
    

} // Fim da função start

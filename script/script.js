$(window).resize(function(){

    $('.spl').css({
        position:'absolute',
        left: ($(window).width() - $('.className').outerWidth())/2,
        top: ($(window).height() - $('.className').outerHeight())/2
    });

});
 $(window).resize();
$(document).ready(function() {
  var userColor = "verde";
   $(window).resize();
audio = document.getElementById('snd'); 

//Control del MENU
var act = 0;
$('#title').click(function() {
  if(act != 1){
    $(".menu").height("80%");
   $("#title").css("background-color","white");
   $("#title").css("border-radius","10px");
   $("#title").css("box-shadow","0 0 10px white");
   $("#title").css("padding","2px");
   $("#title").css("color","black");
   act = 1;
  }else{
    $(".menu").height("5%");
    $("#title").css("background-color","");
   $("#title").css("border-radius","");
   $("#title").css("box-shadow","");
   $("#title").css("padding","");
   $("#title").css("color","white");
   $("#title").css("overflow-y","hide");
    act = 0;
  }
});

$('#menu-a').click(function() {$('#fluid').attr("class","carga azul");userColor = "azul";});
$('#menu-v').click(function() {$('#fluid').attr("class","carga verde");userColor = "verde";});
$('#menu-c').click(function() {$('#fluid').attr("class","carga cobre");userColor = "cobre";});
$('#menu-p').click(function() {$('#fluid').attr("class","carga plata");userColor = "plata";});
$('#menu-r').click(function() {$('#fluid').attr("class","carga rosa");userColor = "rosa";});

////Fin del MENU-control////

  //dom.battery.enabled = true;
var bateria = window.navigator.battery;
var carga = bateria.level *100;
//carga = 90;//Just for testing
//battery.dischargingTime
//carga = 99; //Just for Testing.
  setInterval(function ()  {                
                carga = bateria.level *100;
                $('#fluid').width(carga*2);
                //Evitar numeros negativos (solo en el testing)
                if(carga < 0){
                  carga = 0;
                }

                if(carga == 100 && bateria.charging){
                   navigator.vibrate(1000);
                   if(document.getElementById('alarma').checked){
                         audio.currentTime=0;
                        audio.play(); 
                        alert("La Batería esta llena, desconectame para ahorrar energía! :D");
                      }
                }                   
               if(bateria.charging){
                  $('#info').html("Cargando");
                  $('#char').fadeIn(400);
                }else{
                  $('#info').html("Batería");
                  $('#char').fadeOut(400);
                } 
                if(carga >= 80){
                  $('#fluid').attr("class","carga "+userColor);
                }else if(carga < 80 && carga >= 30){
                  $('#fluid').attr("class","carga orange");
                }else if(carga < 30 && carga >=0){
                  $('#fluid').attr("class","carga red");
                }
                $('#porcentaje').html(carga +"%");
               //carga -=1; //Just for testing
     }, 100);
});

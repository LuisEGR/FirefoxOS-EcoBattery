$(window).resize(function(){

    $('.spl').css({
        position:'absolute',
        left: ($(window).width() - $('.className').outerWidth())/2,
        top: ($(window).height() - $('.className').outerHeight())/2
    });

});
 $(window).resize();
$(document).ready(function() {

   $(window).resize();

audio = document.getElementById('snd'); 

  //dom.battery.enabled = true;
var bateria = window.navigator.battery;
var crgndo;
var imagen ;
var carga = bateria.level *100;
$('#porcentaje').html(carga +"%");
           if(bateria.charging){
                  $('#info').html("Cargando");
                  $('#char').fadeIn(400);
                }else{
                  $('#info').html("Batería");
                  $('#char').fadeOut(400);
                }       
                
//battery.dischargingTime
  setInterval(function ()  {                
                var carga = bateria.level *100;
                if(carga == 100 && bateria.charging){
                   navigator.vibrate(1000);
                   audio.currentTime=0;
                  audio.play(); 
                  alert("La Batería esta llena, desconecte el dispositivo para ahorrar energía");
                }                   
                if(bateria.charging){
                  $('#info').html("Cargando");
                  $('#char').fadeIn(400);
                }else{
                  $('#info').html("Batería");
                  $('#char').fadeOut(400);
                }              
                if(carga >= 80){
                  imagen = "img/Battery Full.png";
                }else if(carga < 80 && carga >= 50){
                  imagen = "img/Battery Medium.png";
                }else if(carga < 50 && carga >=10){
                  imagen = "img/Critical Energy.png";
                }else{
                    imagen = "img/Battery Empty.png";
                }
                $('#imgbat').attr("src",imagen);
                $('#porcentaje').html(carga +"%");
      }, 5000);
});

 /* MENU FIJO HEADER */

 var menu = document.getElementById("header_position");
 var altura = menu.offsetTop;
 var scroll = window.pageYOffset;
 var menuFijo = document.getElementById("menu-navegacion");
 
 // alert(altura);

 //  alert(window.pageYOffset);

 window.addEventListener("scroll", function () {

     if (window.pageYOffset > altura) {

         menuFijo.classList.add("fixed");

     } else {

         menuFijo.classList.remove("fixed");
     }


 });

 
/* MENU PLEGABLE */


 $(document).ready(main);


 var contador = 1;

 function main() {


     $("#barraHeader").click(function () {

         if (contador == 1) {

             $(".menuSacar").animate({
                 left: "0"
             });

             contador = 0;
             
            } else {

             contador = 1;

             $(".menuSacar").animate({
                 left: "-100%"
             });

            }

        })
        
 
            };

/* PREGUNTAS FRECUENTES */

 $(document).ready(function(){

     $(".pf_preguntas #respuesta").hide();

     let icono=true;

     $(".pf_suma").click(function(){

         $(this).next("#respuesta").fadeToggle(500);

         if(icono){

             $(this).addClass("pf_resta");
             icono=false;
         } else{

             $(this).removeClass("pf_resta");
             icono=true;
         }

     });

 });
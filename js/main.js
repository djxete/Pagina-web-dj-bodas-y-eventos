

// BARRA DE NAVEGACIÓN Y MENU DESPLEGABLE //

// $(document).ready(function () {

//     var enlaceRedesSociales = document.querySelectorAll("a,i");

//     for (var i = 0; i < enlaceRedesSociales.length; i++) {

//         enlaceRedesSociales[i].addEventListener("mouseover", iluminar, false);

//         enlaceRedesSociales[i].addEventListener("mouseout", normalidad, false);
//     };

// });

// function iluminar(e) {

//     if (e.target == facebook) {

//         $("#facebook").addClass("destacar");
//         var borderFondo = $("#facebook").css("border-bottom");
//         $("#facebook").css("border-bottom", "3px solid red");



//     } else if (e.target === instagram) {

//         $("#instagram").addClass("destacar");
//         var borderFondo = $("#instagram").css("border");
//         $("#instagram").css("border-bottom", "3px solid red");

//     }
// };

// function normalidad(e) {

//     if (e.target === facebook) {

//         $("#facebook").removeClass("destacar");
//         $("#facebook").css("border-bottom", "none");

//     } else if (e.target == instagram) {
//         $("#instagram").removeClass("destacar");
//         $("#instagram").css("border-bottom", "none");
//     };
// };


$(document).ready(function () {

    $(".menuDesplegable").hide();

    $("#barraHeader").click(function () {

        $(".menuDesplegable").slideToggle(1000);
        $(this).css("color", "#fe4918");

    });

    $("#barraHeader").mouseover(function(){

        $(this).css("color", "#fe4918");
    })

    $("#barraHeader").mouseout(function(){

        $(this).css("color", "#ffffff");
    })



});




// $(document).ready(function () {

//     $("#menuNav").hide();

//     document.getElementById("barraHeader").addEventListener("click", abrir, false);
//     document.getElementById("barraHeader").addEventListener("mouseover", brillo, false);
//     document.getElementById("barraHeader").addEventListener("mouseout", normal, false);


// });

// function abrir() {



//     $("#menuNav").toggle(2000);

// };



// function brillo(e) {

//     if (e.target == barraHeader) {

//         $("#barraHeader").addClass("destacar");
//         var borderFondo = $("#barraHeader").css("border-bottom", "2px solid #f83c08");
//     }


// };

// function normal(e) {

//     if (e.target === barraHeader) {

//         $("#barraHeader").removeClass("destacar");
//         $("#barraHeader").css("border-bottom", "none");

//     }
// };



// PREGUNTAS FRECUENTES //


$(document).ready(function () {

    $(".pf_preguntas #respuesta").hide();

    $(".pf_suma").click(function () {

        $(this).next("#respuesta").slideToggle(1000);
        $(this).toggleClass("pf_resta");

    })




});



// $(document).ready(function () {
//     $(".pf_preguntas #respuesta").hide();
//     $(".pf_suma").click(function () {
//         $(this).next("#respuesta").slideToggle(1000); //apuntamos al siguiente elemento del this
//         $(this).toggleClass("pf_resta"); //cambiamos la clase para cambiar la imagen 

//     });
// });


// $(document).ready(function(){

//     $(".pf_preguntas #respuesta").hide();

//     let icono=true;

//     $(".pf_suma").click(function(){

//         $(this).next("#respuesta").fadeToggle(500);

//         if(icono){

//             $(this).addClass("pf_resta");
//             icono=false;
//         } else{

//             $(this).removeClass("pf_resta");
//             icono=true;
//         }

//     });

// });
'use strict'

$(document).ready(function () {


    //---------------------------PÁGINA INDEX.HTML----------------------

    //1º sacar menú navegacion
    //------------------------------------------------------------------

    let menuSacar = document.querySelector(".menuSacar");
    let barraHeader = document.getElementById("barraHeader");
    let botonAbajo = document.querySelector(".boton__contenido_dj");
    let anchoPantalla = screen.width;
    let botonMenuSacar = document.querySelector(".listaPrincipio-button");
    let opacidad = document.querySelector(".opacidadMEnu");


    // Esconder menu cuando le damos al botón que aparece en >

    $(".listaPrincipio-button").click(function () {

        $(".menuSacar").animate({
            left: "-10000px"
        }, {
            duration: 3000
        });

        $(".opacidadMEnu").animate({
            opacity: "1"
        }, {
            duration: 2000
        });

    });



    // Esconde el menu cuando le damos al icono de las 3 barritas


    $("#barraHeader").click(function () {
        $(".menuSacar").toggle("slow", function () {


            if (menuSacar.style.display == "none") {
                opacidad.style.opacity = "1";

            } else {
                opacidad.style.opacity = "0.4";
                opacidad.style.pointerEvents = "none";

            };


        });

    })




    //     2º cada imagen cuando nos situamos encima de cada una, se tiene que agrandar la imagen,cambiar el color y quitar la pestaña de abajo
    //     --------------------------------------------------------------


    let imgs = document.querySelectorAll(".imagen-evento");

    let cuadradoImagenes = document.querySelectorAll(".eventoEnlace");

    for (let i = 0; i < imgs.length; i++) {

        imgs[i].addEventListener("mouseover", agrandar);
        imgs[i].addEventListener("mouseout", normalidad);

        function agrandar() {
            imgs[i].style.transform = "scale(1.4)";
            imgs[i].style.filter = "none";
            cuadradoImagenes[i].style.bottom = "-100px";
        }

        function normalidad() {
            imgs[i].style.transform = "scale(1)";
            imgs[i].style.filter = "grayscale(1)";
            cuadradoImagenes[i].style.bottom = "0px";
        }


    }









    // VALIDAR FORMULARIO //

    // variables
    let formulario = document.getElementById("formulario");
    let nameForm = document.getElementById("nombre__value");
    let emailForm = document.getElementById("email__value");
    let telefonoForm = document.getElementById("telefono__value");
    let textareaForm = document.getElementById("textarea__value");
    let dateForm = document.getElementById("dia__value");
    let dateForm2 = document.getElementById("dia__value2");
    let dateFormContact = document.getElementById("dia__value__contacto");
    let hourFormContact = document.getElementById("hora__value__contacto")
    let isCheckedTelefono = document.querySelectorAll(".input_form-radio")[0].checked;
    let isCheckedEmail = document.querySelectorAll(".input_form-radio")[1].checked;




    //funciones

    formulario.addEventListener("submit", function () {

        //campo texto

        if (nameForm.value == 0 || nameForm.value == null || /^\s+$/.test(nameForm.value) || nameForm.value.length > 50 || !isNaN(nameForm.value)) {

            nameForm.classList.add("inputIncorrecto");
            document.querySelector(".name__p").style.display = "block";

        } else {
            nameForm.classList.remove("inputIncorrecto");
            document.querySelector(".name__p").style.display = "none";
        }

        //campo email

        if (emailForm.value == 0 || emailForm.value == null || /^\s+$/.test(emailForm.value) || emailForm.value.length > 50 || !/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) {
            emailForm.classList.add("inputIncorrecto");
            document.querySelector(".email__p").style.display = "block";
        } else {
            emailForm.classList.remove("inputIncorrecto");
            document.querySelector(".email__p").style.display = "none";
        }

        //campo telefono

        if (telefonoForm.value == 0 || telefonoForm.value == null || /^\s+$/.test(telefonoForm.value) || telefonoForm.value.length > 20 || isNaN(telefonoForm.value)) {

            telefonoForm.classList.add("inputIncorrecto");
            document.querySelector(".telefono__p").style.display = "block";
        } else {
            telefonoForm.classList.remove("inputIncorrecto");
            document.querySelector(".telefono__p").style.display = "none";
        }

        //campo textarea

        if (textareaForm.value.length > 200) {

            textareaForm.classList.add("inputIncorrecto");
            document.querySelector(".textarea__p").style.display = "block";

        } else {
            textareaForm.classList.remove("inputIncorrecto");
            document.querySelector(".textarea__p").style.display = "none";
        }

        //campo fecha

        let nuevaFecha = new Date(); //fecha de hoy

        let actualDate = new Date(dateForm.value); //fecha que introduce el cliente


        nuevaFecha.setHours(0, 0, 0, 0);
        actualDate.setHours(0, 0, 0, 0);

        if ((nuevaFecha < actualDate) || (dateForm.value == 0)) {
            document.querySelector(".date__p").style.display = "none";
            dateForm.classList.remove("inputIncorrecto");

        } else {

            dateForm.classList.add("inputIncorrecto");
            document.querySelector(".date__p").style.display = "block";

        }

        //checkbox como desea ser contactado y si elegimos teléfono hay que elegir una fecha y hora

        if ((!document.querySelectorAll(".input_form-radio")[0].checked) && (!document.querySelectorAll(".input_form-radio")[1].checked)) {

            document.querySelector(".radio__block").style.display = "block";


        } else if ((document.querySelectorAll(".input_form-radio")[0].checked) && (document.querySelectorAll(".input_form-radio")[1].checked)) {

            document.querySelector(".radio__block").style.display = "block";


        } else if ((document.querySelectorAll(".input_form-radio")[1].checked)) {
            document.querySelector(".radio__block").style.display = "none";

        } else if ((document.querySelectorAll(".input_form-radio")[0].checked)) {
            // si hemos seleccionado solo la opción de teléfono
            
            document.querySelector(".radio__block").style.display = "none";


            let nuevaFecha2 = new Date(); //fecha de hoy

            let actualDate2 = new Date(dateForm2.value); //fecha que introduce el cliente si el teléfono fue elegido

            nuevaFecha2.setHours(0, 0, 0, 0);
            actualDate2.setHours(0, 0, 0, 0);

            if ((dateForm2.value == 0) || (nuevaFecha2 < actualDate2)) {
                
                document.querySelectorAll(".date__p")[1].style.display = "block";
            } 
            else{
                document.querySelectorAll(".date__p")[1].style.display = "none";
            }
            // else if(hourFormContact.value == 0){
                
            //     document.querySelectorAll(".date__p")[2].style.display = "block";

            // }
            
            // else {

            //     if ((nuevaFecha2 < actualDate2)) {
            //         document.querySelectorAll(".date__p")[1].style.display = "none";
            //         dateForm2.classList.remove("inputIncorrecto");

            //     } else {

            //         dateForm2.classList.add("inputIncorrecto");
            //         document.querySelectorAll(".date__p")[1].style.display = "block";

            //     }

            // }



        }


        //si eligió teléfono, eliga fecha y hora


        /*if (document.querySelectorAll(".input_form-radio")[0].checked) {

            


        }*/











    })







});
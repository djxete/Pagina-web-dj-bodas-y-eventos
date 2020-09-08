// 1º seleccionamos todos los inputs
let inputs = document.querySelectorAll("#inputElemento");
let inputsValue = document.querySelectorAll("#inputElemento");

let inputPrueba = document.getElementById("inputElemento").value;

//console.log(inputs)



//2º recorremos cada input y cuando escriba dentro se haga una función y cuando salga del input se haga otra función

inputs.forEach(function (input) {

    input.addEventListener("focus", function () {
        input.classList.add("inputIncorrecto");

    });

    input.addEventListener("blur", validarCampo);


});
//3º funcion validar campo

let validar = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    // mensaje: validarMensaje(),
    // dia: validarDiaYfecha(),
    // hora: validarHora()

}

let validarOtro = {
    nombre: false,
    apellidos: false,
    correo: false,
    telefono: false
}




//console.log(validar.nombre)

function validarCampo(e) {

    switch (e.target.name) {

        case "nombre": //validar nombre
            let value1 = e.target.value;

            if (isNaN(value1) && (value1.length <= 25) && (value1 !== null)) {
                document.querySelectorAll("input")[0].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[0].classList.add("inputCorrecto");
                document.getElementsByClassName("name__p")[0].style.display = "none";

            } else {
                document.getElementsByClassName("name__p")[0].style.display = "block";
            }
            break;

        case "correo": //validar correo

            let value2 = e.target.value;
            let emailValidacion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            function validarEmail(value2) {

                if (emailValidacion.test(value2)) {

                    document.querySelectorAll("input")[1].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[1].classList.add("inputCorrecto");
                    document.getElementsByClassName("email__p")[0].style.display = "none";

                } else {

                    document.getElementsByClassName("email__p")[0].style.display = "block";

                }
            }

            validarEmail(value2);

            break;

        case "telefono": //validar telefono

            let value3 = e.target.value;
            let telefonoValidacion = /^\d{7,14}$/;

            function validarTelefono(value3) {

                if (telefonoValidacion.test(value3)) {
                    document.querySelectorAll("input")[2].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[2].classList.add("inputCorrecto");
                    document.getElementsByClassName("telefono__p")[0].style.display = "none";

                } else {
                    document.getElementsByClassName("telefono__p")[0].style.display = "block";
                }

            }

            validarTelefono(value3);

            break;


        case "textoArea": // validar text area

            let value4 = e.target.value;

            if (value4.length > 200) {

                document.getElementsByClassName("textarea__p")[0].style.display = "block";

            } else if (value = null) {

                document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[3].classList.add("inputCorrecto");
                document.getElementsByClassName("textarea__p")[0].style.display = "none";

            } else {

                document.querySelectorAll("input")[3].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[3].classList.add("inputCorrecto");
                document.getElementsByClassName("textarea__p")[0].style.display = "none";

            }



            break;

        case "dia": //validar dia del tipo de evento

            let value5 = e.target.value;

            function validarFecha() {

                let diaActual = new Date();
                let diaIntroduceCliente = new Date(value5);
                

                diaActual.setHours(0,0,0,0);
                diaIntroduceCliente.setHours(0,0,0,0);

                if(diaIntroduceCliente > diaActual){

                document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                document.getElementsByClassName("date__p")[0].style.display = "none";


                } else if(value5 == 0){

                    document.querySelectorAll("input")[4].classList.remove("inputIncorrecto");
                    document.querySelectorAll("input")[4].classList.add("inputCorrecto");
                    document.getElementsByClassName("date__p")[0].style.display = "none";

                } else{
                    document.getElementsByClassName("date__p")[0].style.display = "block";
                }
               

            
                
            }

            validarFecha(value5);

        default:
            break;
    }





}



//función cuando un campo es correcto cambiar el borde


function bordeNormal() {
    inputs.forEach((input) => {
        input.addEventListener("blur", function () {
            input.style.border = "none";
        })
    })
}
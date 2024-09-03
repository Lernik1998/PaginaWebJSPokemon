// Recorrer el nombre y verificar caracteres especiales y consultas MySQL importantes(Como un SQL inyection)

function verificarConsulta() {

    let nombreObt = document.getElementById("Nombre").value.toUpperCase();

    const CONSULTAR = ['SELECT', 'DROP', 'ALTER', '\''];


    for (let index = 0; index < CONSULTAR.length; index++) {

        if (nombreObt.includes(CONSULTAR[index])) {
            alert("No permitido!");
            console.warn("No lo intentes otra vez!!! Por aquí no!");
            window.location.reload(true);
        }
    }
}

// Amplio la pantalla de información personal al hacer doble click

function ampliarTamaño() {

    let textArea = document.getElementById("infpersonal");

    textArea.style.height = 250 + "px";
    textArea.style.width = 250 + "px";

}

//Se verifica la edad del usuario

function verificaEdad() {

    let edadObt = document.getElementById("edad").value;

    if (edadObt < 12) {
        edadObt = '';
        confirm("No puede inscribirse al torneo si es menor de 12 años,su solicitud se rechazará!");
    }
}



// Si selecciona la casilla de correo y se luego intenta salir salta el codigo

function probandoOnBlur() {
    let mail = document.getElementById("mail");


    if (mail.value === "") {
        let mail2 = prompt("Debe indicar su correo electrónico:");


        if (mail2 === null || mail2 === "") {
            mail.style.backgroundColor = 'red';
            return;
        }


        if (mail2.includes("@")) {
            mail.value = mail2;
            mail.style.backgroundColor = '';
        } else {
            alert("El correo introducido no es válido. Debe contener un '@'.");
            mail.style.backgroundColor = 'red';
        }
    } else {

        if (!mail.value.includes("@")) {
            mail.style.backgroundColor = 'red';
            alert("El correo debe contener un '@'.");
        } else {
            mail.style.backgroundColor = '';
        }
    }
}



function textoNotificacion() {

    let formulario = document.getElementById("formulario");
    formulario.innerText = "Inscrito al torneo";

}


// Cuando se selecciona texto del textArea de información personal
function textoSeleccionado() {
    alert('Texto seleccionado en el área de información personal.');
}

// Un timmer que te recuerda apuntarte al torneo
function timmerRecordatorio() {
    alert("Apuntate si no lo has hecho!!");
}

setTimeout(timmerRecordatorio, 10000);



// Cuando seleccionas Charmander, hay que tener definidos los values en el desplegable()option value="";
function probandoOnChange(desplegable) {


    let valor = desplegable.value;

    if (valor === "Charmander") {
        console.warn("Usuario amante de Charmander!");
        document.getElementById("lPoke").innerText = "Pokemon seleccionado: " + valor;
    } else {
        // Restablece el texto si se selecciona otro Pokémon
        document.getElementById("lPoke").innerText = "Pokemon seleccionado";
    }

}

function borrar(form) {
    form.Nombre.value = '';
    form.edad.value = '';
    form.mail.value = '';
    form.infpersonal.value = '';
}



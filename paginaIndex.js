// Cambia de tamaño en doble click

function cambiarTamaño() {

    let imagen = document.getElementById("imagenPrincipal");

    imagen.style.height = 20 + "px";
}


// Cambia de lo color a rojo
function probandoOnFocus() {
    let elemento = document.getElementById("elem1");

    elemento.style.color = "red";
}


// Esconde el titulo H1
function probandoMouseup() {

    let titulo = document.getElementById("titulo");

    titulo.style.visibility = "hidden";
}


// Boton cambiar color de letra

function colorLetraAleatorio() {

    console.warn("Intento de cambiar el color de letra");

    function generarColorHex() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    let c = document.getElementById("cuerpo");

    c.style.color = generarColorHex();
    c.style.backgroundColor = generarColorHex();

    console.log(c);
}


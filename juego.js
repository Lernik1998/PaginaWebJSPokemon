let body = document.getElementById("cuerpo");

function juegoMemoria() {
    body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center;">' +
        '<button onclick="iniciar()">Iniciar</button>' +
        '<button onclick="detener()">Detener</button>' +
        '</div>';
}

function iniciar() {
    body.innerHTML = '<button onclick="detener()">Volver al inicio</button>' +
        '<h1>Identifique al pokemon:</h1>' +
        '<div style="display: flex; justify-content: center; align-items: center;">' +
        '<table border="1">' +
        '<tr>' +
        '<td>Opción 1</td>' +
        '<td>Opción 2</td>' +
        '<td>Opción 3</td>' +
        '</tr>' +
        '<tr>' +
        '<td> ' + '<img src="Imagenes/opcion1.jpeg" alt="meme" onclick="error()">' + '</td>' +
        '<td> ' + '<img src="Imagenes/opcion2.png" alt="snorlax" onclick="acierto()">' + '</td>' +
        '<td> ' + '<img src="Imagenes/opcion3.png" alt="agumon" onclick="error()">' + '</td>'
    '</tr>' +
        '</table>' +
        '</div>';
}

function detener() {
    window.location.assign("IndexWeb.html");
}



function acierto() {
    alert("Acertaste!!!");
    window.location.assign("IndexWeb.html");
}


function error() {
    alert("Has perdido!!!");
    window.location.assign("IndexWeb.html");
}
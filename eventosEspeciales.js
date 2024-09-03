

function juegoAleatorio() {

  let numAleatorio = parseInt(Math.random() * 50);

  let juego = true;

  while (juego === true) {
    alert(numAleatorio);

    let respOBT = parseInt(prompt("Intente adivinar el numero aleatorio del 1 al 50,para desbloquear pokemons legendarios."));


    if (isNaN(respOBT)) {
      alert("No has introducido un número!");

    } else {

      if (respOBT === numAleatorio) {
        alert("Has acertado!");
        juego = false;
      } else if (respOBT > numAleatorio) {
        alert("El número aleatorio es menor!");
      } else {
        alert("El número aleatorio es mayor!");
      }
    }
  }
}


//Con el interval algun juego en un HTML nuevo, el juego de memoria

let mostrarFecha = document.getElementById("fecha");

let mostrarReloj = document.getElementById("reloj");

// Esto no lo hemos dado,pero he buscado información sobre objetos en JS

let fecha = new Date();

// Para mostrar la fecha en español creo 2 vectores

let diaSemana = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'];

let meses = ['Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]},
  ${fecha.getDate()} 
  de ${meses[fecha.getMonth()]} 
  de ${fecha.getFullYear()}`;


setInterval(() => {
  let hora = new Date();

  mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);

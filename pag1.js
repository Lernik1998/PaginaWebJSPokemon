
let btAtras = document.getElementById("btAnterior");

console.log(btAtras.style);


btAtras.style.paddingLeft = 50;

function anterior() {
   //window.history.back();
   window.location.assign("IndexWeb.html");
}

function salirPag() {
   window.close();
}


function siguiente() {
   // window.history.forward();

   let boton = document.getElementById("btSiguiente");

   boton.style.visibility = "hidden";

   window.location.assign("Pagina2.html");
}



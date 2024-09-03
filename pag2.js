function esconderPip() {

    let gifPip = document.getElementById("getPip");
    gifPip.style.visibility = "hidden";
    //gifPip.style.display = "none";
}
function probandoOnresize() {
    console.log('¡La ventana ha sido redimensionada!');
}

// Función para agrandar la imagen al pasar el ratón por encima
function agrandarImagen(img) {
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform 0.5s ease';
}


// Función para girar la imagen al hacer clic
function girarImagen(img) {
    img.style.transform = 'rotate(20deg)';
    img.style.transition = 'transform 0.5s ease';
}





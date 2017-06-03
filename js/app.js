/*
 * Archivo principal de funcionalidad de JS
 */

/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('navbar');
    if (distanciaY > 600) {
        navbar.classList.add("menu-color");
    } else {
        navbar.classList.remove("menu-color");
    }

    // Al salir de la sección vuelve a su color original -> blanco
    if (distanciaY > 1400) {
        navbar.classList.remove("menu-color");
    }
}

// Evento para el navegador al hacer scroll que detona la función que provoca los cambios de color en la navbar segun la distancia
window.addEventListener('scroll', cambioDeNavbar);
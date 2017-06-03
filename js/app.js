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


/********************************* Reutilizando Modales de applove ************************************************/

(function modalesPorFoto() {
    // Array.from para que reconozca la clase como un arreglo
    var fotos = Array.from(document.getElementsByClassName('img-galery'));
    // Id perteneciente al div donde ubicaremos el modal
    var modalFoto = document.getElementById('work-galery-modal');
    var modalGaleria, close, img;
    fotos.forEach(function(foto) {
        //console.log(foto);
        foto.addEventListener('click', function() {
            // Borro todo lo que esta dentro del modal
            modalFoto.innerHTML = '';
            // En modalGaleria crearemos el div que contendra al modal
            modalGaleria = document.createElement('div');
            // Le creamos la clase modal-galeria donde incluiremos la foto, y sus estilos en main.css
            modalGaleria.classList.add('modal-galeria');
            modalGaleria.innerHTML = foto.innerHTML;

            //Hacemos hide el modal para antes del click
            modalFoto.appendChild(modalGaleria);
            modalFoto.classList.remove('hide');

            // La imagen x para cerrar la foto ira en otro div
            close = document.createElement('div');
            // En la clase close se tratan los estilos para la x
            close.classList.add('close');

            // Se agrega la imagen a img con src
            img = document.createElement('img');
            img.setAttribute('src', 'https://www.iconfinder.com/data/icons/geomicons/32/672366-x-128.png');
            img.setAttribute('class', 'opacity-img');

            // Se apenda la img de x a close y esto al modal foto
            close.appendChild(img);
            modalFoto.appendChild(close);

            // Cuando se haga click en close se escondera el modal nuevamente
            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });

            var close = document.querySelector('.close');
            close.addEventListener('click', function() {
                modalFoto.classList.add('hide');
            });
        });
    });
})();
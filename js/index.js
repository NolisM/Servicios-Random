
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('main-content');
    // Cargar contenido inicial


    // Función para cargar contenido dinámicamente
    function cargarContenido(pagina) {
        mainContent.innerHTML = '';
        const iframeContent = document.createElement('iframe')
        iframeContent.src = pagina
        iframeContent.allowFullscreen = true
        mainContent.appendChild(iframeContent)

    }

    // Detectar clic en el enlace "Inicio"
    const enlaceInicio = document.getElementById('enlace-inicio');
    enlaceInicio.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./index.html');
    });

    // Detectar clic en el enlace "Destinos"
    const enlaceDestinos = document.getElementById('enlace-destinos');
    enlaceDestinos.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/places.html');
    });

    // Detectar clic en el enlace "Sobre Nosotros"
    const enlaceSobreNosotros = document.getElementById('enlace-sobre-nosotros');
    enlaceSobreNosotros.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/about.html');
    });

    const contacto = document.getElementById('contacto');
    contacto.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/form_contacto.html');
    });

});

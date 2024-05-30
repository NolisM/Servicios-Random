
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu');


    cargarContenido('./sitio/inicio.html', "inicio")


    function cargarContenido(pagina, seccion) {
        mainContent.innerHTML = '';
        const iframeContent = document.createElement('iframe')
        iframeContent.src = pagina
        iframeContent.allowFullscreen = true
        mainContent.appendChild(iframeContent)
        window.location.hash = seccion;

    }


    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('open');
    });


    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = link.getAttribute('id').replace('enlace-', '');
            cargarContenido(`./sitio/${targetPage}.html`, targetPage);
            navLinks.classList.remove('active');
            mobileMenuButton.classList.remove('open');
        });
    });


    const enlaceInicio = document.getElementById('enlace-inicio');
    enlaceInicio.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/inicio.html', "inicio");
    });


    const enlaceDestinos = document.getElementById('enlace-destinos');
    enlaceDestinos.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/places.html', "destinos");
    });


    const enlaceSobreNosotros = document.getElementById('enlace-sobre-nosotros');
    enlaceSobreNosotros.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/about.html', "sobreNosotros");
    });

    const contacto = document.getElementById('contacto');
    contacto.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/form_contacto.html', "Contacto");
    });

});

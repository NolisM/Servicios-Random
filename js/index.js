
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu');


    cargarContenido('./sitio/inicio.html')


    function cargarContenido(pagina) {
        mainContent.innerHTML = '';
        const iframeContent = document.createElement('iframe')
        iframeContent.src = pagina
        iframeContent.allowFullscreen = true
        mainContent.appendChild(iframeContent)

    }


    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('open');
    });


    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = link.getAttribute('id').replace('enlace-', '');
            cargarContenido(`./sitio/${targetPage}.html`);
            navLinks.classList.remove('active');
            mobileMenuButton.classList.remove('open');
        });
    });


    const enlaceInicio = document.getElementById('enlace-inicio');
    enlaceInicio.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/inicio.html');
    });


    const enlaceDestinos = document.getElementById('enlace-destinos');
    enlaceDestinos.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/places.html');
    });


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

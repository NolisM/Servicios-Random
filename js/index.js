
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu');


    cargarContenido('./sitio/inicio.html', "inicio")


    function Navegacion(hash) {
        let pagina;
        switch (hash) {
            case '#inicio':
                pagina = './sitio/inicio.html';
                break;
            case '#destinos':
                pagina = './sitio/places.html';
                break;
            case '#sobre-nosotros':
                pagina = './sitio/about.html';
                break;
            case '#contacto':
                pagina = './sitio/form_contacto.html';
                break;
            case '#admin':
                pagina = './sitio/admin.html';
                break;
            default:
                pagina = './sitio/inicio.html';
                break;
        }
        cargarContenido(pagina, hash);
    }

    window.addEventListener('hashchange', () => {
        Navegacion(window.location.hash);
    });


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
        cargarContenido('./sitio/about.html', "sobre-nosotros");
    });

    const contacto = document.getElementById('contacto');
    contacto.addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/form_contacto.html', "contacto");
    });

    // Enlace para la administración
    document.getElementById('enlace-admin').addEventListener('click', function (event) {
        event.preventDefault();
        cargarContenido('./sitio/admin.html', "admin");
    });

    // Cargar la página de administración si el hash es #admin
    if (window.location.hash === '#admin') {
        cargarContenido('./sitio/admin.html', "admin");
    }

});

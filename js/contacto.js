
document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();
    validarForm()

});

const validarForm = () => {

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errores = document.querySelectorAll('.error-message');
    errores.forEach(error => error.innerHTML = '');

    if (!nombre || !apellido || !email || !mensaje) {
        const datosIncompletos = document.getElementById('datosIncompletos')
        datosIncompletos.innerHTML = 'Debe completar todos los campos'

    } else if (!nombreRegex.test(nombre)) {
        console.log('mal nombre', nombre)
        const MensajeContent = document.getElementById('nameError');
        MensajeContent.innerHTML = 'Ingrese un nombre válido.'

    } else if (!apellidoRegex.test(apellido)) {
        console.log('mal apellido', apellido)
        const MensajeContent = document.getElementById('lastnameError');
        MensajeContent.innerHTML = 'Ingrese un apellido válido.';
    } else if (!emailRegex.test(email)) {
        const MensajeContent = document.getElementById('email');
        MensajeContent.innerHTML = 'Ingrese una dirección de correo electrónico válida.';
    } else {
        Swal.fire({
            title: '¡Mensaje enviado!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        limpiarDatos()
    }




}

const limpiarDatos = () => {
    const errores = document.querySelectorAll('.error-message');
    console.log('errorres', errores)
    errores.forEach(error => error.innerHTML = '');
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('mensaje').value = '';
}
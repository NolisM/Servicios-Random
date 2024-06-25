document.addEventListener('DOMContentLoaded', function () {
    const consultas = [
        {
            consulta: "consulta general",
            nombre: "Juan",
            apellido: "Pérez",
            email: "juan.perez@example.com",
            phone: "+54(351)3899755",
            mensaje: "Me gustaría saber más sobre sus paquetes de viaje.",
            suscripcion: true
        },
        {
            consulta: "reserva",
            nombre: "María",
            apellido: "Gómez",
            email: "maria.gomez@example.com",
            phone: "+54(351)3899766",
            mensaje: "Quiero reservar un viaje a Córdoba.",
            suscripcion: false
        },
        {
            consulta: "queja",
            nombre: "Carlos",
            apellido: "López",
            email: "carlos.lopez@example.com",
            phone: "+54(351)3899777",
            mensaje: "Tengo una queja sobre el servicio.",
            suscripcion: true
        }
    ];

    const tbody = document.getElementById('consultasTable').getElementsByTagName('tbody')[0];

    consultas.forEach(consulta => {
        let row = tbody.insertRow();

        let cellConsulta = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellApellido = row.insertCell(2);
        let cellEmail = row.insertCell(3);
        let cellPhone = row.insertCell(4);
        let cellMensaje = row.insertCell(5);
        let cellSuscripcion = row.insertCell(6);

        cellConsulta.textContent = consulta.consulta;
        cellNombre.textContent = consulta.nombre;
        cellApellido.textContent = consulta.apellido;
        cellEmail.textContent = consulta.email;
        cellPhone.textContent = consulta.phone;
        cellMensaje.textContent = consulta.mensaje;
        cellSuscripcion.textContent = consulta.suscripcion ? 'Sí' : 'No';
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     // Hacer la solicitud al backend
//     fetch('../js/adminData')
//         .then(response => response.json())
//         .then(data => {
//             console.log('aca data ', data)
//             // Obtén la referencia al cuerpo de la tabla
//             const tbody = document.getElementById('consultasTable').getElementsByTagName('tbody')[0];

//             // Itera sobre las consultas y crea una fila para cada una
//             data.forEach(consulta => {
//                 let row = tbody.insertRow();

//                 let cellConsulta = row.insertCell(0);
//                 let cellNombre = row.insertCell(1);
//                 let cellApellido = row.insertCell(2);
//                 let cellEmail = row.insertCell(3);
//                 let cellPhone = row.insertCell(4);
//                 let cellMensaje = row.insertCell(5);
//                 let cellSuscripcion = row.insertCell(6);

//                 cellConsulta.textContent = consulta.consulta;
//                 cellNombre.textContent = consulta.nombre;
//                 cellApellido.textContent = consulta.apellido;
//                 cellEmail.textContent = consulta.email;
//                 cellPhone.textContent = consulta.phone;
//                 cellMensaje.textContent = consulta.mensaje;
//                 cellSuscripcion.textContent = consulta.suscripcion ? 'Sí' : 'No';
//             });
//         })
//         .catch(error => {
//             console.error('Error al obtener las consultas:', error);
//         });
// });

document.addEventListener('DOMContentLoaded', function () {
  fetch('https://andresrojas.pythonanywhere.com/api/consultas')// url al get de consultas
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('consultasTable').getElementsByTagName('tbody')[0];
      console.log('data', data)
      data.forEach(consulta => {
        let row = tbody.insertRow();

        let cellConsulta = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellApellido = row.insertCell(2);
        let cellEmail = row.insertCell(3);
        let cellPhone = row.insertCell(4);
        let cellMensaje = row.insertCell(5);
        let cellSuscripcion = row.insertCell(6);
        let cellAcciones = row.insertCell(7);

        cellConsulta.textContent = consulta.consulta;
        cellNombre.textContent = consulta.nombre;
        cellApellido.textContent = consulta.apellido;
        cellEmail.textContent = consulta.email;
        cellPhone.textContent = consulta.telefono;
        cellMensaje.textContent = consulta.mensaje;
        cellSuscripcion.textContent = consulta.suscripcion ? 'Sí' : 'No';

        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.onclick = function () {
          Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0a1b27',
            cancelButtonColor: '#0a1b27',
            confirmButtonText: 'Sí, eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
              const data = {
                id: consulta.id,
                nombre: consulta.nombre,
                apellido: consulta.apellido,
                email: consulta.email,
                telefono: consulta.telefono,
                mensaje: consulta.mensaje,
                tipo: consulta.tipo,// agregasr suscripcion
                estado: 0
              };
              fetch(`https://andresrojas.pythonanywhere.com/api/consultas`, {// aca va url para eliminar manda id
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
                .then(response => {
                  if (response.ok) {
                    tbody.removeChild(row);
                    Swal.fire(
                      'Eliminado!',
                      'La consulta ha sido eliminada.',
                      'success'
                    )


                  } else {
                    console.error('Error al eliminar la consulta');
                    Swal.fire(
                      'Error!',
                      'Hubo un problema al eliminar la consulta.',
                      'error'
                    )
                  }
                })
                .catch(error => {
                  console.error('Error al eliminar la consulta:', error);
                  Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar la consulta.',
                    'error'
                  )
                });
            }
          });
        };

        cellAcciones.appendChild(deleteIcon);
      });
    })
    .catch(error => {
      console.error('Error al obtener las consultas:', error);
    });
});

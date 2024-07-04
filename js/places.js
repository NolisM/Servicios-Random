const apiUrl = 'https://andresrojas.pythonanywhere.com/api/destinos';

function toggleFormVisibility() {
    const formulario = document.getElementById('formulario');
    if (formulario.style.display === "none") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const botonMostrarForm = document.getElementById("mostrarForm");
    const formularioOverlay = document.getElementById("formulario-overlay");
    const cerrarFormulario = document.getElementById("cerrarFormulario");
    const resultsContainer = document.getElementById("results-container");
    const loadingGif = document.getElementById("loading-gif");

    botonMostrarForm.addEventListener("click", function () {
        formularioOverlay.style.display = "block";
    });

    cerrarFormulario.addEventListener("click", function () {
        formularioOverlay.style.display = "none";
    });

    fetchPlaces();

    function fetchPlaces() {
        loadingGif.style.display = "block";

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(response => {
                console.log('aca', response)
                loadingGif.style.display = "none";
                resultsContainer.innerHTML = '';
                const places = response;
                places.forEach(place => {
                    const placeDiv = document.createElement('div');
                    placeDiv.classList.add('element');

                    const nameElement = document.createElement('h3');
                    nameElement.textContent = place.nombre;

                    const addressElement = document.createElement('p');
                    addressElement.textContent = place.ubicacion;

                    const iconElement = document.createElement('img');
                    iconElement.classList.add('image');
                    if (place.imagen) {
                        iconElement.src = place.imagen;
                    } else {
                        iconElement.src = "../image/defaul-icon.png";
                    }

                    placeDiv.appendChild(nameElement);
                    placeDiv.appendChild(addressElement);
                    placeDiv.appendChild(iconElement);
                    resultsContainer.appendChild(placeDiv);
                });

            })
            .catch(err => {
                console.error('Error fetching places:', err);
                loadingGif.style.display = "none";
            });
    }

    const agregarProductoForm = document.getElementById("agregarProductoForm");
    agregarProductoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameService = document.getElementById("nameService").value;
        const adressService = document.getElementById("adressService").value;
        const imageService = document.getElementById("imageService").value;

        const newPlace = {
            nombre: nameService,
            ubicacion: adressService,
            imagen: imageService
        }

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlace)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(newPlace => {
                loadingGif.style.display = "none";
                formularioOverlay.style.display = "none";
                fetchPlaces()
                Swal.fire({
                    title: '¡Lugar cargado con exito!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });

            })
            .catch(err => {
                console.error('Error adding place:', err);
                Swal.fire(
                    'Error!',
                    'Hubo un problema para agregar el nuevo lugar.',
                    'error'
                )
                loadingGif.style.display = "none";
            });


        document.getElementById("nameService").value = "";
        document.getElementById("adressService").value = "";
        document.getElementById("imageService").value = "";

        formularioOverlay.style.display = "none";
    });
});



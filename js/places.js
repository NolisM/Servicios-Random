const apiYelpUrl = 'https://api.yelp.com/v3/events/awesome-event'
const apiKeyYelp = '_6_rV7LoJIPfdfUCMHwJ8lIEA9MNKbHnIdAa-dm8WhVVaULxzOYqXO-jqPzh9Olea235l9nolhzuv6MefjWRX6LejrUGSN6-DJezCIEGCyPWQ3ks0oVH3xH2dqw1ZnYx'
const optionsYelp = { method: 'GET', headers: { accept: 'application/json', authorization: `Bearer ${apiKeyYelp}`, } };

const apiUrl = 'https://api.foursquare.com/v3/places/search';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3buQ3sQjU/VUhFJxh7dVe8/1AMnf65GT0l4vUU+iWqFg='
    }
};



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

    botonMostrarForm.addEventListener("click", function () {
        formularioOverlay.style.display = "block";
    });

    cerrarFormulario.addEventListener("click", function () {
        formularioOverlay.style.display = "none";
    });
    fetchPlaces();

    function fetchPlaces() {
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const places = response.results;
                places.forEach(place => {
                    const placeDiv = document.createElement('div');
                    placeDiv.classList.add('element');

                    const nameElement = document.createElement('h3');
                    nameElement.textContent = place.name;

                    const addressElement = document.createElement('p');
                    addressElement.textContent = place.location.address;

                    const iconElement = document.createElement('img');
                    iconElement.src = place.categories[0].icon.prefix + 64 + place.categories[0].icon.suffix;

                    placeDiv.appendChild(nameElement);
                    placeDiv.appendChild(addressElement);
                    placeDiv.appendChild(iconElement);
                    resultsContainer.appendChild(placeDiv);
                });

            })
            .catch(err => console.error(err));
    }

    const agregarProductoForm = document.getElementById("agregarProductoForm");
    agregarProductoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Obtener datos del formulario
        const nameService = document.getElementById("nameService").value;
        const adressService = document.getElementById("adressService").value;

        // Mostrar los datos del formulario en el contenedor de resultados
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('element');

        const nameServiceElement = document.createElement('h3');
        nameServiceElement.textContent = nameService;

        const adressServiceElement = document.createElement('p');
        adressServiceElement.textContent = adressService;

        serviceDiv.appendChild(nameServiceElement);
        serviceDiv.appendChild(adressServiceElement);
        resultsContainer.appendChild(serviceDiv);

        // Limpiar los campos del formulario
        document.getElementById("nameService").value = "";
        document.getElementById("adressService").value = "";

        formularioOverlay.style.display = "none";
    });
});

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
        const loadingGif = document.getElementById("loading-gif");
        loadingGif.style.display = "block";
        const latitude = -31.4167;
        const longitude = -64.1833;
        const radius = 100000;

        const params = new URLSearchParams({
            ll: `${latitude},${longitude}`,
            radius: radius,
            v: '20220101',
        });

        const url = `${apiUrl}?${params}`;

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                loadingGif.style.display = "none";
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
            .catch(err => {
                console.error(err)
                loadingGif.style.display = "none";
            });
    }

    const agregarProductoForm = document.getElementById("agregarProductoForm");
    agregarProductoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameService = document.getElementById("nameService").value;
        const adressService = document.getElementById("adressService").value;


        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('element');

        const nameServiceElement = document.createElement('h3');
        nameServiceElement.textContent = nameService;

        const adressServiceElement = document.createElement('p');
        adressServiceElement.textContent = adressService;

        serviceDiv.appendChild(nameServiceElement);
        serviceDiv.appendChild(adressServiceElement);
        resultsContainer.appendChild(serviceDiv);


        document.getElementById("nameService").value = "";
        document.getElementById("adressService").value = "";

        formularioOverlay.style.display = "none";
    });
});

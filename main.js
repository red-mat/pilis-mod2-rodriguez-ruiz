// add method format to string: https://sebhastian.com/javascript-format-string/
if (!String.prototype.format) {
    String.prototype.format = function () {
      let args = arguments;

      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };
};
  

const OPEN_WATHER_ICON="http://openweathermap.org/img/wn/{0}@2x.png";
const OPEN_WATHER_API="https://api.openweathermap.org/data/2.5/weather?appid={0}&lat={1}&lon={2}&units=metric";
const OPEN_WATHER_KEY="55c6c3cfbfcdc79bde4a63cf2d5bdcbf";

const EVENTO = {
    nombre:"feria de las plantas",
    lugar: {
        nombre:"ciudad cultural",
        latitud:-24.183346784048,
        longitud:-65.33130398918436
    }
};

const OPEN_WATHER_URL = OPEN_WATHER_API.format(
    OPEN_WATHER_KEY,
    EVENTO.lugar.latitud,
    EVENTO.lugar.longitud
);


const load_weather = (data) => {
    const data_temp = data.main.temp + "º";
    const icon_url = OPEN_WATHER_ICON.format(data.weather[0].icon);    
    
    const id_lugar="clima-lugar";
    const id_icono="clima-icono";
    const id_temperatura="clima-temperatura";

    const lugar = document.getElementById(id_lugar);
    const icono = document.getElementById(id_icono);
    const temperatura = document.getElementById(id_temperatura);

    lugar.textContent = EVENTO.lugar.nombre;
    temperatura.textContent = data_temp;
    icono.src = icon_url;
};

fetch(OPEN_WATHER_URL)
    .then(response => response.json())
    .then(data => load_weather(data));

function onClick(event) {
    event.preventDefault();

    const mensaje = {
        name1: document.getElementById('name1').value,
        headline: document.getElementById('headline').value,
        cell: document.getElementById('cell').value
    }
    console.log(mensaje);


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                'Información enviada',
                'Gracias',
                'success'
            );
            cleanForm();
        })
        .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('formulario');
    formulario.reset();
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);
/* let p1 = document.getElementById('registrate');
console.log(p1);

console.log(p1.textContent);
/*otra manera*/
/* const ele1 = document.querySelector("title");
console.log(ele1);

console.log(ele1.textContent);  */

/*formulario*/
/* const getValueInput = () => {
let inputValue1 = document.querySelector("#name1").value;
let inputValue2 = document.querySelector("#headline").value;
let inputValue3 = document.querySelector("#cell").value;
console.log(inputValue1);
console.log(inputValue2);
console.log(inputValue3);
}; */

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
            /* redirectUrl(); */
        })
        .catch((err) => console.log(err));
}

function cleanForm() {
    let formulario = document.getElementById('formulario');
    formulario.reset();
}
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

// h1 { color: red}
// .parrafito { ... }
// #pid { ... }

// console.log({
    //     h1,
    //     p,
    //     parrafito,
    //     pid,
    //     input,
    // });

    // const h1 = document.querySelector('h1');
    // const p = document.querySelector('p');
    // const parrafito = document.querySelector('.parrafito');
    // const pid = document.querySelector('#pid');
    // const input = document.querySelector('input');

// // Cambiar el contenido de una etiqueta
// h1.innerHTML = 'Miniero By <br> RubiusOMG';
// h1.innerText = 'Miniero By <br> RubiusOMG';

// // Leer o obtener el valor de un atributo (e.j. clase, id, src)
// console.log(h1.getAttribute('pantalla'));

// // Editar o reescribir el valor del atributo
// h1.setAttribute('pantalla', 'PlatziOLED');
// console.log(h1.getAttribute('pantalla'));

// // Añadir clases
// h1.classList.add('rojo');
// // Remover clases
// h1.classList.remove('rojo');

// // No es necesario el "Set" o "get"
// input.setAttribute('placeholder', 'Tacos sin tortilla')
// // Escribimos directamente el atributo que necesitamos y listo
// // Funciona para los inputs
// input.value = 'Tacos sin tortilla'

// //Crear HTML desde cero
// const img = document.createElement('img');
// img.setAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg');
// console.log(img);
// pid.innerHTML = " ";
// pid.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('.result');
const form = document.querySelector('#form');

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    const suma = +input1.value + +input2.value
    result.append(suma)
}

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     console.log({event})
//     event.preventDefault();
//     const suma = +input1.value + +input2.value
//     result.append(suma)
// }
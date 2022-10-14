// let names = 'Kevin';
// let lastName = 'Santiago';
// let username;
// let age;
// let email;
// let ageRange;
// let saveMoney = 2500;
// let debts = 1200;

// let money = saveMoney - debts;

// console.log(`My name is ${names} ${lastName}, all money a have is $${money} Dolars`);

// Reto 2
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nameMoney(name, lastName, username) {
    let completeName = `${name} ${lastName}`;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${username}`);
}

nameMoney("Kevin", "Santiago", "MrKetchupp")

// Reto 3
// const tipoDeSuscripcion = "S";

// switch (tipoDeSuscripcion) {
// case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
// break;
// case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// break;
// case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// break;
// case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// break;
// }

//Lista de suscripciones y beneficios
const suscripcionList = [
    {suscripcion: "Free", beneficio: "Solo puedes tomar los cursos gratis"},
    {suscripcion: "Basic", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {suscripcion: "Expert", beneficio: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {suscripcion: "ExpertPlus", beneficio:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];
//Suscripcion del Platzinauta
const tipoDeSuscripciones = "ExpertPlus";

//Buscar array
function beneficios(list) {
    return list.suscripcion == tipoDeSuscripciones
}

//Buscar si existe valor en suscripcion
function suscripcion(list) {
    return list.suscripcion = tipoDeSuscripciones
}

//Imprimir suscripcion y beneficio correspondiente si tu suscripcion en valida
if (suscripcion(suscripcionList) === tipoDeSuscripciones) {
    const {suscripcion, beneficio} = suscripcionList.find(beneficios)
    console.log(`Con tu suscripcion ${suscripcion} ${beneficio}`)
}

//1
var tipoDeSuscripcion =
["free",
 "basic",
 "expert",
 "expertplus"];

function cualquierArray(array) {
    console.log(array[0]);
}

cualquierArray(tipoDeSuscripcion);

//2
var tipoDeSuscripcion =
["free",
 "basic",
 "expert",
 "expertplus",
 "plusultra"];

let tamaño = tipoDeSuscripcion.length;

function cualquierArray (array) {
    for (let i = 0; i < tamaño; i++) {
        console.log(array[i]);
    }
}
cualquierArray(tipoDeSuscripcion);

//3
function personaje(nombre, region, elemento, arma) {
    this.nombre = nombre;
    this.region = region;
    this.elemento = elemento;
    this.arma = arma;
}
var nombre = prompt("¿Nombre de tu personaje?")
var region = prompt("¿De cual region es tu personaje?");
var elemento = prompt("¿Cual elemento domina tu personaje?" + "\n" + "Ejemplo: Agua, fuego, tierra..etc");
var arma = prompt("¿Cual arma porta tu personaje?");

var personajes = new personaje( nombre, region, elemento, arma);
console.log("Felicidades!🎉 Haz creado un nuevo persoanje" + "\n" + "Sus atributos son los siguentes:")

function imprimir(objecto) {
    for (i in objecto) {
      console.log(` Su ${i} es ${objecto[i]}`);
    }
  }

imprimir(personajes);


var suma = prompt("¿Cuanto es 2 + 2?")
suma = Number(suma);

if (suma === 4) {
    console.log("Felicidades!🎉, tu respuesta es correcta")
} else {
    console.log("Tu respuesta " + suma + " es incorrecta🚫")
}
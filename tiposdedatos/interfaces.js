// Declaración de un objeto personaUna que sigue la estructura definida por la interfaz Personas
var personaUna = {
    nombre: "Juliana",
    apellido: "Muñoz",
    edad: 22,
    peso: 80,
};
console.log(personaUna.nombre);
// Declaración de un objeto juan que sigue la estructura definida por la interfaz moldeJuan
// En este caso, los valores de las propiedades deben coincidir exactamente con los valores definidos en la interfaz
var juan = {
    nombre: "Juan",
    apellido: "Gonzales",
    edad: 22,
    peso: 66
};
console.log("Peso de Juan", juan.peso);

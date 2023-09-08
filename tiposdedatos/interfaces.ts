// Definición de una interfaz llamada Personas
interface Personas {
    nombre: string;
    apellido: string;
    edad: number;
    peso: number;
}

// Declaración de un objeto personaUna que sigue la estructura definida por la interfaz Personas
var personaUna: Personas = {
    nombre: "Juliana",
    apellido: "Muñoz",
    edad: 22,
    peso: 80,
};
console.log(personaUna.nombre);

// Definición de una interfaz moldeJuan (nota que aquí se define una estructura específica)
interface moldeJuan {
    nombre: "Juan"; // En este caso, nombre es una propiedad que debe tener un valor específico
    apellido: "Gonzales";
    edad: 22;
    peso: 66;
}

// Declaración de un objeto juan que sigue la estructura definida por la interfaz moldeJuan
// En este caso, los valores de las propiedades deben coincidir exactamente con los valores definidos en la interfaz
var juan: moldeJuan = {
    nombre: "Juan",
    apellido: "Gonzales",
    edad: 22,
    peso: 66
}

console.log("Peso de Juan", juan.peso);

for(var cantidadRepetir:number= 0 ; cantidadRepetir<=100; cantidadRepetir++){
    console.log(cantidadRepetir)
   }
   // FOR IN
   // Definir un objeto
const person = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bogotá"
};

// Iterar sobre las propiedades del objeto usando for...in
for (const propiedad in person) {
    console.log(propiedad + ": " + person[propiedad]);
}
// Definir un array
const numbers = [1, 2, 3, 4, 5];

// Iterar sobre los elementos del array usando for...of
for (const number of numbers) {
    console.log(number);
}

const numeritos = [1, 2, 3, 4, 5];

// Usando forEach con una función de flecha
numeritos.forEach((numero) => {
    console.log(numero);
});

// While
let contador = 0;

// Usando while con una función de flecha
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Do While
// En el bloque DO WHILE se ejecute al menos una vez el bloque antes de verificar la condición.
let contadorDos = 0;

do {
  console.log(contadorDos);
  contadorDos++;
} while (contadorDos < 5);


// Ejemplo usando un arreglo de strings
var listadoDeNombres:Array<string>= [
    "Maria","Ana","Andres"
]

for(var cantidadM = 0; cantidadM < listadoDeNombres.length; cantidadM++){
console.log("Hola bienvenid@", listadoDeNombres[cantidadM])
}
// Ejemplo con un array de tipo Usuario que usa la interfaz Usuario
interface Usuario{
    nombre: string,
    apellido: string
}
var listadoDeUsuarios:Array<Usuario> = [
{
    nombre: "Fito",
    apellido: "Hernandez"
},
{
    nombre: "Julia",
    apellido: "Jimenez"
}
]
for(let user of listadoDeUsuarios){
    console.log(user.nombre);
} 

for(let posicion in listadoDeUsuarios){
console.log(posicion)
 console.log(listadoDeUsuarios[posicion].nombre)
}
for (var cantidadRepetir = 0; cantidadRepetir <= 100; cantidadRepetir++) {
    console.log(cantidadRepetir);
}
// FOR IN
// Definir un objeto
var person = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bogotá"
};
// Iterar sobre las propiedades del objeto usando for...in
for (var propiedad in person) {
    console.log(propiedad + ": " + person[propiedad]);
}
// Definir un array
var numbers = [1, 2, 3, 4, 5];
// Iterar sobre los elementos del array usando for...of
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    console.log(number);
}
var numeritos = [1, 2, 3, 4, 5];
// Usando forEach con una función de flecha
numeritos.forEach(function (numero) {
    console.log(numero);
});
// While
var contador = 0;
// Usando while con una función de flecha
while (contador < 5) {
    console.log(contador);
    contador++;
}
// Do While
// En el bloque DO WHILE se ejecute al menos una vez el bloque antes de verificar la condición.
var contadorDos = 0;
do {
    console.log(contadorDos);
    contadorDos++;
} while (contadorDos < 5);
// Ejemplo usando un arreglo de strings
var listadoDeNombres = [
    "Maria", "Ana", "Andres"
];
for (var cantidadM = 0; cantidadM < listadoDeNombres.length; cantidadM++) {
    console.log("Hola bienvenid@", listadoDeNombres[cantidadM]);
}
var listadoDeUsuarios = [
    {
        nombre: "Fito",
        apellido: "Hernandez"
    },
    {
        nombre: "Julia",
        apellido: "Jimenez"
    }
];
for (var _a = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _a < listadoDeUsuarios_1.length; _a++) {
    var user = listadoDeUsuarios_1[_a];
    console.log(user.nombre);
}
for (var posicion in listadoDeUsuarios) {
    console.log(posicion);
    console.log(listadoDeUsuarios[posicion].nombre);
}

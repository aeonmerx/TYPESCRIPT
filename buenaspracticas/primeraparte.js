// Operadores lógicos
var age = 20;
var esMayorDeEdad = age >= 18 && "Mayor de edad";
console.log(esMayorDeEdad); // "Mayor de edad"
// Funciones de orden superior
var numeros = [1, 2, 3, 4, 5];
var cuadrados = numeros.map(function (numero) { return numero * numero; });
console.log(cuadrados); // Resultado en consola: [1, 4, 9, 16, 25]
// Patrones de Desestructuración y Asignación
var persona = { nombre: "Juan", Edad: 30 };
var nombre = persona.nombre, Edad = persona.Edad;
console.log(nombre); // "Juan"
console.log(Edad); // 30
// Expresiones regulares
var text = "Hello, World!";
var patron = /Hello/;
if (patron.test(text)) {
    console.log("El texto contiene 'Hello'");
}
else {
    console.log("El texto no contiene 'Hello'");
}
// Anidamiento de expresiones ternarias
var saldo = 1000;
var consultarSaldo = saldo < 100
    ? "Se te va a acabar el dinero"
    : saldo < 500
        ? "El saldo ha llegado a la mitad de su valor inicial"
        : "El saldo es alto todavía";
console.log(consultarSaldo); // "El saldo es alto todavía"
// Asignación condicional (operador ternario como operador de asignación)
var esMayordeEdad = Edad >= 18;
console.log(esMayordeEdad); // true si Edad >= 18, de lo contrario, false
// Operadores ternarios -> Uso de devoluciones de funciones
function saludo(esFormal) {
    return esFormal ? "Hola, señor/señora" : "Hola";
}
// Funciones con devolución de cadena para inscripciones
function inscribirseIngles() {
    return "Bienvenido al curso de Inglés";
}
function inscribirseFrances() {
    return "Bienvenido al curso de Francés";
}
// Si la inscripción es "Inglés", ejecuta la función para inscribirse en Inglés, de lo contrario, en Francés
var inscripcion = "Inglés" ? inscribirseIngles() : inscribirseFrances();
console.log(inscripcion);
// Validación de valores nulos o undefined
var nombreDeUsuario = nombre || "Invitado";
console.log(nombreDeUsuario);

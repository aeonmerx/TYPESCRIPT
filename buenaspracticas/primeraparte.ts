// Operadores lógicos
const age: number = 20;
const esMayorDeEdad: string | boolean = age >= 18 && "Mayor de edad";
console.log(esMayorDeEdad); // "Mayor de edad"

// Funciones de orden superior
const numeros: number[] = [1, 2, 3, 4, 5];
const cuadrados: number[] = numeros.map(numero => numero * numero);
console.log(cuadrados); // Resultado en consola: [1, 4, 9, 16, 25]

// Patrones de Desestructuración y Asignación
const persona = { nombre: "Juan", Edad: 30 };
const { nombre, Edad } = persona;
console.log(nombre); // "Juan"
console.log(Edad); // 30

// Expresiones regulares
const text = "Hello, World!";
const patron = /Hello/;
if (patron.test(text)) {
  console.log("El texto contiene 'Hello'");
} else {
  console.log("El texto no contiene 'Hello'");
}

// Anidamiento de expresiones ternarias
const saldo = 1000;
const consultarSaldo =
  saldo < 100
    ? "Se te va a acabar el dinero"
    : saldo < 500
    ? "El saldo ha llegado a la mitad de su valor inicial"
    : "El saldo es alto todavía";
console.log(consultarSaldo); // "El saldo es alto todavía"

// Asignación condicional (operador ternario como operador de asignación)
const esMayordeEdad = Edad >= 18;
console.log(esMayordeEdad); // true si Edad >= 18, de lo contrario, false

// Operadores ternarios -> Uso de devoluciones de funciones
function saludo(esFormal: boolean): string {
  return esFormal ? "Hola, señor/señora" : "Hola";
}

// Funciones con devolución de cadena para inscripciones
function inscribirseIngles(): string {
  return "Bienvenido al curso de Inglés";
}

function inscribirseFrances(): string {
  return "Bienvenido al curso de Francés";
}

// Si la inscripción es "Inglés", ejecuta la función para inscribirse en Inglés, de lo contrario, en Francés
const inscripcion = "Inglés" ? inscribirseIngles() : inscribirseFrances();
console.log(inscripcion);

// Validación de valores nulos o undefined
const nombreDeUsuario = nombre || "Invitado";
console.log(nombreDeUsuario);

 # Typescript 
 Te proporcionaré un informe que destaca algunas de las diferencias clave entre JavaScript (JS) y TypeScript (TS), junto con ejemplos de código para ilustrar estas diferencias.
# 1. Tipado Estático vs. Tipado Dinámico:
JavaScript (JS): JS es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa.
javascript
let x = 10; // x es un número
x = "Hola"; // x ahora es una cadena
TypeScript (TS): TS es un lenguaje de programación de tipado estático que permite definir tipos de variables y parámetros de función de manera explícita.
typescript
let x: number = 10; // x es un número
x = "Hola"; // Error: No se puede asignar una cadena a una variable de tipo número
# 2. Inferencia de Tipos:
JavaScript (JS): En JS, los tipos de variables se determinan automáticamente en tiempo de ejecución.
javascript
let y = 20; // y se infiere como número automáticamente
TypeScript (TS): TS puede inferir tipos automáticamente, pero también permite una anotación de tipos explícita.
typescript
let y = 20; // TS infiere que y es de tipo number automáticamente
let z: string = "Hola"; // Anotación de tipo explícita
 # 3. Interfaces y Tipos Personalizados:
JavaScript (JS): JS no tiene soporte nativo para la creación de estructuras de datos personalizadas con tipos específicos.
javascript
// En JS, no hay una forma nativa de definir una estructura de datos con tipos específicos
TypeScript (TS): TS permite definir interfaces y tipos personalizados para estructuras de datos complejas.
typescript
interface Persona {
  nombre: string;
  edad: number;
}

const usuario: Persona = {
  nombre: "Juan",
  edad: 30,
};
# 4. Chequeo Estático de Errores:

JavaScript (JS): En JS, los errores se descubren en tiempo de ejecución, lo que puede llevar a errores inesperados en la aplicación.
javascript

function dividir(a, b) {
  return a / b; // Puede causar un error en tiempo de ejecución si b es 0
}
TypeScript (TS): TS realiza un chequeo estático de tipos en tiempo de compilación y muestra errores antes de ejecutar el código.
typescript

function dividir(a: number, b: number): number {
  return a / b; // Error de compilación si b es 0
}
# 5. Usar Módulos:

JavaScript (JS): JS tiene soporte limitado para módulos en navegadores, lo que puede llevar a problemas de alcance y carga de archivos.
javascript
// Importar un módulo en JS
// Requiere configuración adicional en entornos de navegador
TypeScript (TS): TS tiene un sistema de módulos más avanzado y permite una gestión más robusta de las dependencias y el alcance.
typescript
// Importar un módulo en TS
import { modulo } from "./miModulo";
Estas son algunas de las diferencias clave entre JavaScript y TypeScript. TypeScript agrega características de tipado estático y más herramientas para escribir código más seguro y mantenible. Sin embargo, JavaScript sigue siendo ampliamente utilizado y es compatible con TypeScript.





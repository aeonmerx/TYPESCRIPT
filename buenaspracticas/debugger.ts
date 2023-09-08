/*El debugger es una herramienta poderosa que te permite depurar código en JavaScript/TypeScript.
 Te permite establecer puntos de interrupción en tu código para pausar la ejecución
  y examinar el estado de las variables, la pila de llamadas y más. 
  Aquí tienes algunos ejemplos y usos comunes del debugger:
  */

//  Establecer un punto de interrupción:

function miFuncion() {
  let x = 5;
  debugger; // Establece un punto de interrupción aquí
  console.log(x);
}
miFuncion();
//Cuando ejecutas este código en un entorno de desarrollo, la ejecución se pausará en la línea con debugger,
// lo que te permite inspeccionar el valor de x y otros aspectos del entorno.

//Inspeccionar el ámbito (scope):

// Puedes usar el debugger para examinar las variables en un ámbito particular. Esto es útil para comprender el flujo de datos en tu programa.

function suma(a, b) {
  debugger;
  return a + b;
}
const result = suma(3, 4);
// Seguir la ejecución de una función:

// Si tienes una función complicada y deseas saber cómo se ejecuta línea por línea, puedes usar el debugger para avanzar paso a paso.

function funcionComplicada() {
  let x = 0;
  for (let i = 0; i < 10; i++) {
    x += i;
    debugger; // Pausa la ejecución en cada iteración del bucle
  }
  return x;
}
const resultado = funcionComplicada();
//Examinar eventos y llamadas AJAX:

//Puedes usar el debugger para inspeccionar eventos y llamadas AJAX en una página web. 
//Esto es útil para depurar problemas relacionados con eventos y solicitudes.

//Depurar errores:

//Cuando se produce un error en tu código, puedes usar el debugger para rastrear la causa del error
// y encontrar la línea exacta en la que ocurre.

//Depuración condicional:

//Puedes agregar declaraciones debugger condicionales para detener la ejecución solo cuando se cumple una condición específica.

let x = 5;
if (x < 10) {
  debugger; // Solo se activa cuando x es menor que 10
}
// Depurar ciclos infinitos:

//Si accidentalmente creas un bucle infinito en tu código, puedes usar el 
// debugger para detener la ejecución y examinar el estado actual.


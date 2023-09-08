/* 
Las excepciones son eventos inesperados que pueden ocurrir durante la ejecución de un programa
 y que pueden interrumpir el flujo normal de ejecución. 
 En TypeScript, al igual que en muchos otros lenguajes de programación, se utiliza un mecanismo 
 de manejo de excepciones para detectar, gestionar y responder a estos eventos inesperados de manera controlada.
El manejo de excepciones en TypeScript se basa en tres componentes principales:

try: Este bloque de código se utiliza para envolver una sección de código que podría lanzar una excepción.
 Si ocurre una excepción dentro de este bloque, la ejecución se transferirá al bloque catch.

catch: Dentro de este bloque se capturan y manejan las excepciones que se producen en el bloque try. 
Puedes especificar el tipo de excepción que deseas capturar y proporcionar un manejo personalizado para esa excepción.
 Si se lanza una excepción dentro del bloque try, el código en el bloque catch se ejecutará.

finally: Este bloque opcional se ejecuta después de que se haya completado el bloque try y, en su caso, el bloque catch.
 Se utiliza comúnmente para realizar tareas de limpieza o liberación de recursos, independientemente
  de si se ha lanzado una excepción o no.


*/
try {
    // Código que podría lanzar una excepción
    let resultado = 10 / 0; // Esto lanzará una excepción de división por cero
    console.log(resultado); // Esta línea nunca se ejecutará si se lanza una excepción
  } catch (error) {
    // Captura y maneja la excepción
    console.error("Se ha producido un error:", error.message);
  } finally {
    // Este bloque se ejecutará independientemente de si se lanza una excepción o no
    console.log("Finalizando el proceso");
  }
  // Lanzar una excepciòn personalizada
  function dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("División por cero no permitida");
    }
    return a / b;
  }
  
  try {
    let resultado = dividir(10, 0); // Esto lanzará una excepción personalizada
    console.log(resultado);
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
  }
  // Try y ctach con mùltiples excepciones
  try {
    let datos = JSON.parse("esto no es un JSON"); // Esto lanzará una excepción de análisis JSON
    console.log(datos);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Error de sintaxis en JSON:", error.message);
    } else {
      console.error("Se ha producido un error desconocido:", error.message);
    }
  }
// Definir y lanzar una excepciòn personalizada
class MiError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "MiError";
    }
  }
  
  function lanzarExcepcionPersonalizada() {
    throw new MiError("Esta es una excepción personalizada");
  }
  
  try {
    lanzarExcepcionPersonalizada();
  } catch (error) {
    if (error instanceof MiError) {
      console.error("Excepción personalizada capturada:", error.message);
    } else {
      console.error("Se ha producido un error desconocido:", error.message);
    }
  }
  
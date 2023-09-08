function saludar(): void {
    console.log("¡Hola, mundo!");
}

// Llamada a la función
saludar();

function sumar(a: number, b: number): void {
    const resultado = a + b;
    console.log(`La suma de ${a} y ${b} es igual a ${resultado}`);
}

// Llamada a la función
sumar(5, 3);

function multiplicar(a: number, b: number): number {
    return a * b;
}

// Llamada a la función y asignación del resultado a una variable
const resultadoMultiplicacion = multiplicar(4, 7);
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);


// Funcion con manejo de excepciones
function calcularPromedio(notas: number[]): number {
    // Verificar que haya al menos una nota
    if (notas.length === 0) {
      throw new Error("Debe proporcionar al menos una nota");
    }
  
// Verificar que todas las notas estén dentro del rango válido (0 a 100)
    if (notas.some((nota) => nota < 0 || nota > 100)) {
      throw new Error("Todas las notas deben estar en el rango de 0 a 100");
    }
  
 // Funciòn para Calcular el promedio dividiendo la suma de las notas por la cantidad de notas
    const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = sumaNotas / notas.length;
  
// Redondear el promedio a dos decimales y devolverlo
    return Math.round(promedio * 100) / 100;
  }
  
// Ejemplo de uso
  const notas = [85, 92, 78];
  
  try {
    const promedio = calcularPromedio(notas);
    console.log(`El promedio de las notas es: ${promedio}`);
  } catch (error) {
    console.error(error.message);
  }
  
function saludar() {
    console.log("¡Hola, mundo!");
}
// Llamada a la función
saludar();
function sumar(a, b) {
    var resultado = a + b;
    console.log("La suma de ".concat(a, " y ").concat(b, " es igual a ").concat(resultado));
}
// Llamada a la función
sumar(5, 3);
function multiplicar(a, b) {
    return a * b;
}
// Llamada a la función y asignación del resultado a una variable
var resultadoMultiplicacion = multiplicar(4, 7);
console.log("El resultado de la multiplicaci\u00F3n es: ".concat(resultadoMultiplicacion));
// Funcion con manejo de excepciones
function calcularPromedio(notas) {
    // Verificar que haya al menos una nota
    if (notas.length === 0) {
        throw new Error("Debe proporcionar al menos una nota");
    }
    // Verificar que todas las notas estén dentro del rango válido (0 a 100)
    if (notas.some(function (nota) { return nota < 0 || nota > 100; })) {
        throw new Error("Todas las notas deben estar en el rango de 0 a 100");
    }
    // Funciòn para Calcular el promedio dividiendo la suma de las notas por la cantidad de notas
    var sumaNotas = notas.reduce(function (acumulador, nota) { return acumulador + nota; }, 0);
    var promedio = sumaNotas / notas.length;
    // Redondear el promedio a dos decimales y devolverlo
    return Math.round(promedio * 100) / 100;
}
// Ejemplo de uso
var notas = [85, 92, 78];
try {
    var promedio = calcularPromedio(notas);
    console.log("El promedio de las notas es: ".concat(promedio));
}
catch (error) {
    console.error(error.message);
}

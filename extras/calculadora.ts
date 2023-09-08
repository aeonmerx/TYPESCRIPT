const calculadora = (a: number, b: number, operador: string) =>
  operador === "+" ? a + b :
  operador === "-" ? a - b :
  operador === "*" ? a * b :
  operador === "/" ? (b === 0 ? "División por cero no permitida" : a / b) :
  "Operador no válido";

// Ejemplo de uso
const resultadoSuma = calculadora(5, 3, "+");
console.log("Resultado de la suma:", resultadoSuma); // 8

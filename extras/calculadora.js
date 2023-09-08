var calculadora = function (a, b, operador) {
    return operador === "+" ? a + b :
        operador === "-" ? a - b :
            operador === "*" ? a * b :
                operador === "/" ? (b === 0 ? "División por cero no permitida" : a / b) :
                    "Operador no válido";
};
// Ejemplo de uso
var resultadoSuma = calculadora(5, 3, "+");
console.log("Resultado de la suma:", resultadoSuma); // 8

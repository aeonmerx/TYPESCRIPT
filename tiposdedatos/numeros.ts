// NÙMEROS ENTEROS
let a: number = 20,
    b: number = 10,
    suma:number = a + b,
    resta:number = a - b,
    multiplicacion:number = a * b,
    division:number = a / b;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);

// NÙMEROS DECIMALES
let decimal: number = 3.14;
let resultado: number = decimal * 2;
console.log(`Número decimal: ${decimal}`);
console.log(`Resultado: ${resultado}`);
// EXPONENCIACIÒN Y RAIZ CUADRADA
let base: number = 2;
let exponente: number = 3;
let potencia: number = Math.pow(base, exponente);
let raizCuadrada: number = Math.sqrt(16);
console.log(`Potencia: ${potencia}`);
console.log(`Raíz Cuadrada: ${raizCuadrada}`);

// NEGATIVOS Y VALOR ABSOLUTO
let negativo: number = -5;
let absoluto: number = Math.abs(negativo);
console.log(`Número negativo: ${negativo}`);
console.log(`Valor absoluto: ${absoluto}`);

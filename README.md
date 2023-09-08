# TypeScript vs. JavaScript: Diferencias Clave

En este informe, exploraremos algunas de las diferencias más destacadas entre JavaScript (JS) y TypeScript (TS), dos lenguajes de programación ampliamente utilizados en el desarrollo web y de aplicaciones. Veremos ejemplos de código para ilustrar estas diferencias.

## 1. Tipado Estático vs. Tipado Dinámico:

**JavaScript (JS):** JS es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. Esto puede conducir a errores inesperados si no se manejan adecuadamente.

```javascript
let x = 10; // x es un número
x = "Hola"; // x ahora es una cadena (sin errores en tiempo de compilación)

TypeScript (TS): TS es un lenguaje de programación de tipado estático que permite definir tipos de variables y parámetros de función de manera explícita. Esto ayuda a capturar errores en tiempo de compilación antes de que se ejecuten los programas.

let x: number = 10; // x es un número
x = "Hola"; // Error de compilación: No se puede asignar una cadena a una variable
```
##2. Inferencia de Tipos:
JavaScript (JS): En JS, los tipos de variables se determinan automáticamente en tiempo de ejecución. No se requieren anotaciones de tipos.
```
let y = 20; // y se infiere como número automáticamente

TypeScript (TS): TS puede inferir tipos automáticamente, pero también permite una anotación de tipos explícita para mayor claridad y seguridad.

let y = 20; // TS infiere que y es de tipo number automáticamente
let z: string = "Hola"; // Anotación de tipo explícita
```

# TypeScript vs. JavaScript: Diferencias Clave

En este informe, exploraremos algunas de las diferencias más destacadas entre JavaScript (JS) y TypeScript (TS), dos lenguajes de programación ampliamente utilizados en el desarrollo web y de aplicaciones. Veremos ejemplos de código para ilustrar estas diferencias.

## 1. Tipado Estático vs. Tipado Dinámico:

**JavaScript (JS):** JS es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. Esto puede conducir a errores inesperados si no se manejan adecuadamente.

```javascript
let x = 10; // x es un número
x = "Hola"; // x ahora es una cadena (sin errores en tiempo de compilación)

# TypeScript vs. JavaScript: Diferencias Clave

En este informe, exploraremos algunas de las diferencias más destacadas entre JavaScript (JS) y TypeScript (TS), dos lenguajes de programación ampliamente utilizados en el desarrollo web y de aplicaciones. Veremos ejemplos de código para ilustrar estas diferencias.

## 1. Tipado Estático vs. Tipado Dinámico:

**JavaScript (JS):** JS es un lenguaje de programación de tipado dinámico, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. Esto puede conducir a errores inesperados si no se manejan adecuadamente.

```javascript
let x = 10; // x es un número
x = "Hola"; // x ahora es una cadena (sin errores en tiempo de compilación)
```
TypeScript (TS): TS es un lenguaje de programación de tipado estático que permite definir tipos de variables y parámetros de función de manera explícita. Esto ayuda a capturar errores en tiempo de compilación antes de que se ejecuten los programas.

```javascript
let x: number = 10; // x es un número
x = "Hola"; // Error de compilación: No se puede asignar una cadena a una variable
```
##2. Inferencia de Tipos:
JavaScript (JS): En JS, los tipos de variables se determinan automáticamente en tiempo de ejecución. No se requieren anotaciones de tipos.
```javascript
let y = 20; // y se infiere como número automáticamente
```
TypeScript (TS): TS puede inferir tipos automáticamente, pero también permite una anotación de tipos explícita para mayor claridad y seguridad.
```javascript
let y = 20; // TS infiere que y es de tipo number automáticamente
let z: string = "Hola"; // Anotación de tipo explícita
```
## 3. Interfaces y Tipos Personalizados:
JavaScript (JS): JS no tiene soporte nativo para la creación de estructuras de datos personalizadas con tipos específicos.
// En JS, no hay una forma nativa de definir una estructura de datos con tipos específicos
TypeScript (TS): TS permite definir interfaces y tipos personalizados para estructuras de datos complejas, lo que facilita la creación y documentación de código.

TypeScript (TS): TS permite definir interfaces y tipos personalizados para estructuras de datos complejas, lo que facilita la creación y documentación de código.

```typescript
interface Persona {
  nombre: string;
  edad: number;
}

const usuario: Persona = {
  nombre: "Juan",
  edad: 30,
};
```
## 4. Chequeo Estático de Errores:
JavaScript (JS): En JS, los errores se descubren en tiempo de ejecución, lo que puede llevar a errores inesperados en la aplicación.
```typescript
function dividir(a, b) {
  return a / b; // Puede causar un error en tiempo de ejecución si b es 0
}
```
TypeScript (TS): TS realiza un chequeo estático de tipos en tiempo de compilación y muestra errores antes de ejecutar el código, lo que ayuda a prevenir errores costosos en producción.
```typescript
function dividir(a: number, b: number): number {
  return a / b; // Error de compilación si b es 0
}

```
## 5. Usar Módulos:
JavaScript (JS): JS tiene soporte limitado para módulos en navegadores, lo que puede llevar a problemas de alcance y carga de archivos en aplicaciones más grandes.
TypeScript (TS): TS tiene un sistema de módulos más avanzado y permite una gestión más robusta de las dependencias y el alcance, lo que facilita la organización de proyectos.
```typescript
// Importar un módulo en TS
import { modulo } from "./miModulo";

```

En TypeScript, puedes crear un array que contenga varios tipos utilizando la unión de tipos. Puedes definir un array que acepte valores de diferentes tipos mediante el uso de la notación de unión (|). Aquí tienes un ejemplo:
```typescript
// Array que puede contener números, cadenas o booleanos
let variosTipos: (number | string | boolean)[] = [1, "dos", true, 4, "cinco", false];
```

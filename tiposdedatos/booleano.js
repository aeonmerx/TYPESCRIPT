// LOS BOOLEANOS SON TIPOS DE DATOS LÒGICOS PUEDEN SER TRUE O FALSE (VERDADERO O FALSO)
var esNuevo = false;
var deseaImprimir = true;
// SI LA SUMA ES CORRECTA DARÀ TRUE SINO FALSE
var aceptaDescuento = (15 + 19 == 33);
console.log("Acepta descuento?", aceptaDescuento);
var william = "William";
var william2 = "William";
// COMPARAR SI SON IGUALES
var sonNombresIguales = (william == william2);
console.log("Son iguales", sonNombresIguales);
// OPERARADOR LÒGICO AND DEBEN SER TODOS VERDADEROS PARA SER VERDADERO
var sonAmbosVerdaderos = sonNombresIguales && aceptaDescuento;
console.log("Son ambos verdaderos:", sonAmbosVerdaderos);
// OPERADOR LÒGICO OR, ALGUNA DEBE SER VERDADERA PARA SER VERDADERO
var algunaEsVerdadera = sonNombresIguales || aceptaDescuento;
console.log("algunaEsVerdadera", algunaEsVerdadera);
// COMPARAR SI SON DIFERENTES
var lista1 = 100;
var lista2 = 200;
var esDiferente = lista1 != lista2;
console.log("Las listas son diferentes?", esDiferente);
// COMPARAR SI ES MAYOR A
var number = 20;
var numberTwo = 200;
var esMayor = numberTwo > number;
var esMenor = number < numberTwo;
console.log("Numero dos es mayor que el uno?", esMayor);
console.log("Numero uno es menor que el dos?", esMenor);
// MAYOR O IGUAL Y MENOR O IGUAL
var numero1 = 10;
var numero2 = 20;
var esMenorOIgualQue = numero1 <= numero2; // true, 10 es menor o igual que 20
var esMayorOIgualQue = numero1 >= numero2; // false, 10 no es mayor o igual que 20
console.log("Es menor o igual que:", esMenorOIgualQue);
console.log("Es mayor o igual que:", esMayorOIgualQue);

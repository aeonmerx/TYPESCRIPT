// Definir un tipo usando 'record' para representar un diccionario de nombres y edades.
type DiccionarioEdades = Record<string, number>;

// Crear un objeto de tipo DiccionarioEdades.
const edades: DiccionarioEdades = {
  "Juan": 30,
  "María": 25,
  "Pedro": 35,
};

// Acceder a las edades por nombre.
console.log("Edad de Juan:", edades["Juan"]); // 30

// ----------------------------------------------------------------------------

// Definir un tipo usando 'record' para representar un diccionario de productos y sus precios.
type CatalogoProductos = Record<string, number>;

// Crear un objeto de tipo CatalogoProductos.
const catalogo: CatalogoProductos = {
  "Camiseta": 20,
  "Pantalones": 40,
  "Zapatos": 60,
};

// Acceder a los precios por producto.
console.log("Precio de los pantalones:", catalogo["Pantalones"]); // 40

// ----------------------------------------------------------------------------

// Definir un tipo usando 'record' para representar un diccionario de colores y sus códigos hexadecimales.
type ColoresHex = Record<string, string>;

// Crear un objeto de tipo ColoresHex.
const colores: ColoresHex = {
  "Rojo": "#FF0000",
  "Verde": "#00FF00",
  "Azul": "#0000FF",
};

// Acceder a los códigos hexadecimales por color.
console.log("Código hexadecimal del color verde:", colores["Verde"]); // "#00FF00"

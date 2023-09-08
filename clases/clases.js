var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// EJEMPLO UNO CON ANIMALES
// Clase base Animal
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre; // Inicializamos la propiedad nombre con el valor proporcionado al crear una instancia de Animal
    }
    // Método público para obtener el nombre del animal
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    // Método público para establecer el nombre del animal
    Animal.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    // Método público para hacer sonido (por defecto)
    Animal.prototype.hacerSonido = function () {
        console.log("El animal hace un sonido genérico.");
    };
    return Animal;
}());
// Clase Gato que hereda de Animal
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza; // Inicializamos la propiedad raza con el valor proporcionado al crear una instancia de Gato
        return _this;
    }
    // Método público para obtener la raza del gato
    Gato.prototype.getRaza = function () {
        return this.raza;
    };
    // Método público para establecer la raza del gato
    Gato.prototype.setRaza = function (raza) {
        this.raza = raza;
    };
    // Método público para hacer sonido (sobrescrito para los gatos)
    Gato.prototype.hacerSonido = function () {
        console.log("El gato maulla.");
    };
    return Gato;
}(Animal));
// Clase Toro que hereda de Animal
var Toro = /** @class */ (function (_super) {
    __extends(Toro, _super);
    function Toro(nombre, color) {
        var _this = _super.call(this, nombre) || this;
        _this.color = color; // Inicializamos la propiedad color con el valor proporcionado al crear una instancia de Toro
        return _this;
    }
    // Método público para obtener el color del toro
    Toro.prototype.getColor = function () {
        return this.color;
    };
    // Método público para establecer el color del toro
    Toro.prototype.setColor = function (color) {
        this.color = color;
    };
    // Método público para hacer sonido (sobrescrito para los toros)
    Toro.prototype.hacerSonido = function () {
        console.log("El toro brama.");
    };
    return Toro;
}(Animal));
// Función para mostrar el sonido de cualquier animal
function mostrarSonido(animal) {
    console.log("".concat(animal.getNombre(), " dice:")); // Accedemos al nombre mediante el método getNombre
    animal.hacerSonido(); // Llama al método hacerSonido del animal, que puede ser de cualquier tipo de animal (Gato, Toro, u otros)
}
// Creamos instancias de Gato y Toro
var miGato = new Gato("Mishi", "Siames");
var miToro = new Toro("Toro Fuerte", "Marrón");
// Llamamos a la función mostrarSonido con ambas instancias
mostrarSonido(miGato); // Muestra el sonido específico del gato
mostrarSonido(miToro); // Muestra el sonido específico del toro
// Ejemplo de cómo acceder y modificar las propiedades mediante los métodos
console.log("Raza del gato: ".concat(miGato.getRaza()));
miGato.setRaza("Angora");
console.log("Nueva raza del gato: ".concat(miGato.getRaza()));
// Ejemplo dos con estudiantes
// Primero, tenemos la clase "Alumno" 
var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
    };
    // Este es un método que muestra un mensaje simple.
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola, soy un estudiante llamado", this.nombre, this.apellido);
    };
    return Alumno;
}());
// Ahora, creamos una nueva clase llamada "EstudianteGraduado" que hereda de "Alumno".
var EstudianteGraduado = /** @class */ (function (_super) {
    __extends(EstudianteGraduado, _super);
    // Y un constructor especial para los graduados.
    function EstudianteGraduado(titulacion) {
        var _this = 
        // Llamamos al constructor de la clase "Alumno" utilizando "super()".
        _super.call(this) || this;
        // Configuramos la titulación del graduado.
        _this.titulacion = titulacion;
        return _this;
    }
    // Sobrescribimos el método "mostrarMensaje" para agregar más información.
    EstudianteGraduado.prototype.mostrarMensaje = function () {
        console.log("¡Soy un estudiante graduado!");
        _super.prototype.mostrarMensaje.call(this); // Llamamos al método de la clase padre.
        console.log("Mi titulación es:", this.titulacion);
    };
    return EstudianteGraduado;
}(Alumno));
// Ahora, creamos un estudiante graduado.
var graduadoUno = new EstudianteGraduado("Ingeniero Informático");
graduadoUno.asignar("Marcela", "Ramos", 22);
// Mostramos un mensaje utilizando el método "mostrarMensaje" de la clase "EstudianteGraduado".
graduadoUno.mostrarMensaje();

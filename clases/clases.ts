// EJEMPLO UNO CON ANIMALES
// Clase base Animal
class Animal {
    private nombre: string; // Propiedad privada para almacenar el nombre del animal

    constructor(nombre: string) {
        this.nombre = nombre; // Inicializamos la propiedad nombre con el valor proporcionado al crear una instancia de Animal
    }

    // Método público para obtener el nombre del animal
    getNombre(): string {
        return this.nombre;
    }

    // Método público para establecer el nombre del animal
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // Método público para hacer sonido (por defecto)
    hacerSonido(): void {
        console.log("El animal hace un sonido genérico.");
    }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
    private raza: string; // Propiedad privada específica para los gatos

    constructor(nombre: string, raza: string) {
        super(nombre); // Llamamos al constructor de la clase base y le pasamos el nombre del gato
        this.raza = raza; // Inicializamos la propiedad raza con el valor proporcionado al crear una instancia de Gato
    }

    // Método público para obtener la raza del gato
    getRaza(): string {
        return this.raza;
    }

    // Método público para establecer la raza del gato
    setRaza(raza: string): void {
        this.raza = raza;
    }

    // Método público para hacer sonido (sobrescrito para los gatos)
    hacerSonido(): void {
        console.log("El gato maulla.");
    }
}

// Clase Toro que hereda de Animal
class Toro extends Animal {
    private color: string; // Propiedad privada específica para los toros

    constructor(nombre: string, color: string) {
        super(nombre); // Llamamos al constructor de la clase base y le pasamos el nombre del toro
        this.color = color; // Inicializamos la propiedad color con el valor proporcionado al crear una instancia de Toro
    }

    // Método público para obtener el color del toro
    getColor(): string {
        return this.color;
    }

    // Método público para establecer el color del toro
    setColor(color: string): void {
        this.color = color;
    }

    // Método público para hacer sonido (sobrescrito para los toros)
    hacerSonido(): void {
        console.log("El toro brama.");
    }
}

// Función para mostrar el sonido de cualquier animal
function mostrarSonido(animal: Animal): void {
    console.log(`${animal.getNombre()} dice:`); // Accedemos al nombre mediante el método getNombre
    animal.hacerSonido(); // Llama al método hacerSonido del animal, que puede ser de cualquier tipo de animal (Gato, Toro, u otros)
}

// Creamos instancias de Gato y Toro
const miGato: Gato = new Gato("Mishi", "Siames");
const miToro: Toro = new Toro("Toro Fuerte", "Marrón");

// Llamamos a la función mostrarSonido con ambas instancias
mostrarSonido(miGato); // Muestra el sonido específico del gato
mostrarSonido(miToro); // Muestra el sonido específico del toro

// Ejemplo de cómo acceder y modificar las propiedades mediante los métodos
console.log(`Raza del gato: ${miGato.getRaza()}`);
miGato.setRaza("Angora");
console.log(`Nueva raza del gato: ${miGato.getRaza()}`);


// Ejemplo dos con estudiantes
// Primero, tenemos la clase "Alumno" 
class Alumno {
    private nombre: string;
    private apellido: string;
    private peso: number;

    constructor() {}

    asignar(nombreParametro: string, apellidoParametro: string, pesoParametro: number) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
    }

    // Este es un método que muestra un mensaje simple.
    mostrarMensaje() {
        console.log("Hola, soy un estudiante llamado", this.nombre, this.apellido);
    }
}

// Ahora, creamos una nueva clase llamada "EstudianteGraduado" que hereda de "Alumno".
class EstudianteGraduado extends Alumno {
    // Añadimos un nuevo atributo específico para los graduados.
    private titulacion: string;

    // Y un constructor especial para los graduados.
    constructor(titulacion: string) {
        // Llamamos al constructor de la clase "Alumno" utilizando "super()".
        super();
        // Configuramos la titulación del graduado.
        this.titulacion = titulacion;
    }

    // Sobrescribimos el método "mostrarMensaje" para agregar más información.
    mostrarMensaje() {
        console.log("¡Soy un estudiante graduado!");
        super.mostrarMensaje(); // Llamamos al método de la clase padre.
        console.log("Mi titulación es:", this.titulacion);
    }
}

// Ahora, creamos un estudiante graduado.
const graduadoUno = new EstudianteGraduado("Ingeniero Informático");
graduadoUno.asignar("Marcela", "Ramos", 22);

// Mostramos un mensaje utilizando el método "mostrarMensaje" de la clase "EstudianteGraduado".
graduadoUno.mostrarMensaje();

// SWITCH NORMAL: COMPARA IGUALDAD
var numero = 2;

switch (numero) {
    case 1:
        console.log("El número es igual a 1");
        break;
    case 2:
        console.log("El número es igual a 2");
        break;
    case 3:
        console.log("El número es igual a 3");
        break;
    default:
        console.log("El número no coincide con ningún caso");
}

// SWITCH CASE AVANZADO
// ESTE EVALUA CONDICIONES MÀS COMPLEJAS AL SWITCH NORMAL
var numerosEnviados = 100;
switch (true) {
    case numerosEnviados === 100: {
        console.log("Son cien");
        break;
    }
    case numerosEnviados === 50: {
        console.log("Son cincuenta");
        break;
    }
    case numerosEnviados < 50: {
        console.log("Son menos de cincuenta");
        break;
    }
    case numerosEnviados === 0: {
        console.log("No se han enviado numeros");
        break;
    }
    default: {
        console.log("Otro caso");
    }
}

// Ejemplo en uniòn a una interfaz
// Si el cliente desea factura se le crea una
interface Factura {
    id: number;
    nombreCliente: string;
    valor: number;
}

let cantidadSolic: number | null;
const deseafact: boolean = true;
const cantidadSt: string | null = prompt("Escribe cantidad solicitada");

if (!cantidadSt || cantidadSt.trim() === "") {
    console.log("Cantidad solicitada no válida");
} else {
    cantidadSolic = parseInt(cantidadSt);

    // Solicitar el nombre del cliente y validar la entrada
    const nombreCliente: string | null = prompt("Escribe tu nombre");

    if (!nombreCliente || nombreCliente.trim() === "") {
        console.log("Nombre de cliente no válido");
    } else {
        let contador = 0;
        let descuentoMensaje = "";

        // Ejecuta la primera expresiòn que sea verdadera
        switch (true) {
            case cantidadSolic < 10:
                descuentoMensaje = "El importe no tiene descuento";
                break;
            case cantidadSolic >= 10 && cantidadSolic <= 30:
                descuentoMensaje = "El importe tiene 30% de descuento";
                break;
            case cantidadSolic > 30:
                descuentoMensaje = "El importe tiene 50% de descuento";
                break;
            default:
                descuentoMensaje = "No existen importes";
        }

        console.log(descuentoMensaje);

        if (deseafact) {
            contador++; // Incrementar el contador
            const factura: Factura = {
                id: contador,
                nombreCliente: nombreCliente,
                valor: cantidadSolic*5000,
            };
            console.log("Factura generada:", factura);
        }
    }
}

// ENUM 
enum tipoMenu{
    canciones = 1,
    cursos,historia
}

// Enum para definir los tipos de menú
const TipoMenu = {
    Canciones: 1,
    Cursos: 2,
    Historia: 3,
};

// Función para mostrar el menú
function mostrarMenu() {
    console.log("Bienvenido al menú principal:");
    console.log("1. Ver canciones");
    console.log("2. Ver cursos");
    console.log("3. Ver historia");
    console.log("0. Salir");
}

// Función para manejar la selección del usuario
function manejarSeleccion(seleccion) {
    switch (seleccion) {
        case TipoMenu.Canciones:
            console.log("Mostrando lista de canciones...");
            break;
        case TipoMenu.Cursos:
            console.log("Mostrando lista de cursos...");
            break;
        case TipoMenu.Historia:
            console.log("Mostrando historia...");
            break;
        case 0:
            console.log("Saliendo del menú.");
            break;
        default:
            console.log("Selección no válida. Por favor, elige una opción del menú.");
    }
}

// Ejemplo de uso
mostrarMenu();

// Capturar la entrada del usuario usando prompt
const seleccionUsuarioStr = prompt("Elija una opción del menú (1, 2, 3 o 0):");
if (seleccionUsuarioStr !== null) {
    const seleccionUsuario = parseInt(seleccionUsuarioStr);
    if (!isNaN(seleccionUsuario)) {
        manejarSeleccion(seleccionUsuario);
    } else {
        console.log("Selección no válida. Debe ingresar un número.");
    }
} else {
    console.log("Entrada no válida. Debe ingresar un valor.");
}

// EJEMPLO DE USO DE ENUM sin el uso de switch 

// Definir un "enum" para representar tipos de información genética
enum TipoGenetica {
    ADN = "ADN",
    ARN = "ARN",
    Proteina = "Proteína",
}

// Objeto que mapea las selecciones del usuario con descripciones
const informacionGenetica: Record<TipoGenetica, string> = {
    [TipoGenetica.ADN]: "El ADN es la molécula que almacena la información genética.",
    [TipoGenetica.ARN]: "El ARN es una molécula que desempeña un papel en la síntesis de proteínas.",
    [TipoGenetica.Proteina]: "Las proteínas son componentes esenciales en el funcionamiento de las células.",
};

// Función para manejar la selección del usuario
function manejarSeleccionGenetica(seleccion: TipoGenetica) {
    const seleccionUsuario = informacionGenetica[seleccion];

    if (seleccionUsuario) {
        console.log(seleccionUsuario);
    } else {
        console.log("Selección no válida. Por favor, elige un tipo de información genética.");
    }
}

// Ejemplo de uso
const seleccionUsuario: TipoGenetica = TipoGenetica.ADN; // Cambia esto con la selección del usuario

manejarSeleccionGenetica(seleccionUsuario);

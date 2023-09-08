var _a;
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
var cantidadSolic;
var deseafact = true;
var cantidadSt = prompt("Escribe cantidad solicitada");
if (!cantidadSt || cantidadSt.trim() === "") {
    console.log("Cantidad solicitada no válida");
}
else {
    cantidadSolic = parseInt(cantidadSt);
    // Solicitar el nombre del cliente y validar la entrada
    var nombreCliente = prompt("Escribe tu nombre");
    if (!nombreCliente || nombreCliente.trim() === "") {
        console.log("Nombre de cliente no válido");
    }
    else {
        var contador = 0;
        var descuentoMensaje = "";
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
            var factura = {
                id: contador,
                nombreCliente: nombreCliente,
                valor: cantidadSolic * 5000,
            };
            console.log("Factura generada:", factura);
        }
    }
}
// ENUM 
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["cursos"] = 2] = "cursos";
    tipoMenu[tipoMenu["historia"] = 3] = "historia";
})(tipoMenu || (tipoMenu = {}));
// Enum para definir los tipos de menú
var TipoMenu = {
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
var seleccionUsuarioStr = prompt("Elija una opción del menú (1, 2, 3 o 0):");
if (seleccionUsuarioStr !== null) {
    var seleccionUsuario_1 = parseInt(seleccionUsuarioStr);
    if (!isNaN(seleccionUsuario_1)) {
        manejarSeleccion(seleccionUsuario_1);
    }
    else {
        console.log("Selección no válida. Debe ingresar un número.");
    }
}
else {
    console.log("Entrada no válida. Debe ingresar un valor.");
}
// EJEMPLO DE USO DE ENUM sin el uso de switch 
// Definir un "enum" para representar tipos de información genética
var TipoGenetica;
(function (TipoGenetica) {
    TipoGenetica["ADN"] = "ADN";
    TipoGenetica["ARN"] = "ARN";
    TipoGenetica["Proteina"] = "Prote\u00EDna";
})(TipoGenetica || (TipoGenetica = {}));
// Objeto que mapea las selecciones del usuario con descripciones
var informacionGenetica = (_a = {},
    _a[TipoGenetica.ADN] = "El ADN es la molécula que almacena la información genética.",
    _a[TipoGenetica.ARN] = "El ARN es una molécula que desempeña un papel en la síntesis de proteínas.",
    _a[TipoGenetica.Proteina] = "Las proteínas son componentes esenciales en el funcionamiento de las células.",
    _a);
// Función para manejar la selección del usuario
function manejarSeleccionGenetica(seleccion) {
    var seleccionUsuario = informacionGenetica[seleccion];
    if (seleccionUsuario) {
        console.log(seleccionUsuario);
    }
    else {
        console.log("Selección no válida. Por favor, elige un tipo de información genética.");
    }
}
// Ejemplo de uso
var seleccionUsuario = TipoGenetica.ADN; // Cambia esto con la selección del usuario
manejarSeleccionGenetica(seleccionUsuario);

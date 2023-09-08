var cantidadSolicitada;
var deseafactura = true;
var cantidadStr = prompt("Escribe cantidad solicitada");
// Verifica si la Cantidad es nulla o esta en undefined
if (!cantidadStr || cantidadStr.trim() === "") {
    console.log("Cantidad solicitada no válida");
}
else {
    cantidadSolicitada = parseInt(cantidadStr);
    // Solicitar el nombre del cliente y validar la entrada
    var nombreCliente = prompt("Escribe tu nombre");
    if (!nombreCliente || nombreCliente.trim() === "") {
        console.log("Nombre de cliente no válido");
    }
    else {
        var contador = 0;
        if (cantidadSolicitada < 10) {
            console.log("El importe no tiene descuento");
        }
        else if (cantidadSolicitada >= 10 && cantidadSolicitada <= 30) {
            console.log("El importe tiene 30% de descuento");
        }
        else {
            if (cantidadSolicitada > 30) {
                console.log("El importe tiene 50% de descuento");
            }
            else {
                console.log("No existen importes");
            }
        }
        if (deseafactura) {
            contador++; // Incrementar el contador
            var factura = {
                id: contador,
                nombreCliente: nombreCliente,
                valor: cantidadSolicitada * 5000,
            };
            console.log("Factura generada:", factura);
        }
    }
}

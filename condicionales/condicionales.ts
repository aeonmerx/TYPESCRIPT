interface Factura {
    id: number;
    nombreCliente: string;
    valor: number;
}
let cantidadSolicitada: number | null;
const deseafactura: boolean = true;
const cantidadStr: string | null = prompt("Escribe cantidad solicitada");

// Verifica si la Cantidad es nulla o esta en undefined
if (!cantidadStr || cantidadStr.trim() === "") {
    console.log("Cantidad solicitada no válida");
} else {
    cantidadSolicitada = parseInt(cantidadStr);

    // Solicitar el nombre del cliente y validar la entrada
    const nombreCliente: string | null = prompt("Escribe tu nombre");
    
    if (!nombreCliente || nombreCliente.trim() === "") {
        console.log("Nombre de cliente no válido");
    } else {
        let contador = 0;
        if (cantidadSolicitada < 10) {
            console.log("El importe no tiene descuento");
        } else if (cantidadSolicitada >= 10 && cantidadSolicitada <= 30) {
            console.log("El importe tiene 30% de descuento");
        } else {
            if (cantidadSolicitada > 30) {
                console.log("El importe tiene 50% de descuento");
            } else {
                console.log("No existen importes");
            }
        }

        if (deseafactura) {
            contador++; // Incrementar el contador
            const factura: Factura = {
                id: contador,
                nombreCliente: nombreCliente,
                valor: cantidadSolicitada*5000,
            };
            console.log("Factura generada:", factura);
        }
    }
}

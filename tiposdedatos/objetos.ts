 // Objeto simple :un solo objeto con sus propiedades nombre.. etc 
 // Los valores de las propiedasdes pueden ser de varios tipos de datos
 var cliente = {
    nombre: "Cliente 1",
    apellido: "Apellido 1",
    edad: 52,
    peso: 60,
    ciudad: "Bogotà"
 }
 console.log(cliente);
 console.log(cliente.ciudad)
// Incluyendo mismos objetos permitiendo anidar objetos dentro de otros
 let people= {
    nombre: "Juan",
    edad: 30,
    // aqui en "direcciòn" estamos definiendo el valor de esta propiedad como un objeto("sub-objeto") con sus propiedades
    // Por lo cual calle es propiedad de direccion, pero direccion es propiedad de persona
    direccion: {
      calle: "123 Calle Principal",
      ciudad: "Ciudad Ejemplo",
      codigoPostal: "12345",
      pais: {
        nombre: "País Ejemplo",
        codigo: "PE",
      },
    },
    contacto: {
      telefono: "123-456-7890",
      correo: "juan@example.com",
    },
  };

  let empleados = {
    empleado1: {
      nombre: "Juan",
      ciudad: "Barranquilla",
      correo: "correo@gmail.com",
      saldo: {
        horasTrabajadas: 100,
        tarifa: 7000,
      },
    },
    empleado2: {
      nombre: "Ana",
      ciudad: "Medellín",
      correo: "ana@gmail.com",
      saldo: {
        horasTrabajadas: 120,
        tarifa: 7500,
      },
    },
    empleado3: {
      nombre: "Jimmy",
      ciudad: "Barranquilla",
      correo: "correo@gmail.com",
      saldo: {
        horasTrabajadas: 100,
        tarifa: 7000,
      },
    },
    contacto: {
      telefono: "123-456-7890",
      correo: "juan@example.com",
    },
  };

  // Acceder a las horas trabajadas del empleado
let horasEmpleado3 = empleados.empleado3.saldo.horasTrabajadas;
console.log("Horas trabajadas del empleado 3:", horasEmpleado3);

  
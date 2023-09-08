var listadoDeNombres:Array<string> = [
    "Marta","Pedro","Luisa","Lina","Miguel"
]
console.log("Listado de nombres",listadoDeNombres)

var listadoNumeros:Array<number> = [
    1,2,33,44,55,-10
]
// Retornar el numero en la posiciòn 3 RECUERDA QUE EL PRIMER ELEMENTO ES [0]
console.log(listadoNumeros[2])
// Con interfaces
interface Alumnos {
    nombre:string;
    salon:number;
}

var listadoAlumnos:Array<Alumnos> = [
    {
        nombre:"Juanito",
        salon: 101
    },
    {
      nombre: "Pepita",
      salon: 202 
    }
]
// Imprimir el nombre de Juanito
console.log(listadoAlumnos[0].nombre)
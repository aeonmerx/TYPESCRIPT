/*En TypeScript, type es una palabra clave que se utiliza para definir nuevos tipos de datos.
 Con type, puedes crear alias o nombres alternativos para tipos existentes o definir tipos completamente nuevos.
Hay varias formas en las que puedes usar type:*/

//Alias de tipo simple: Puedes crear un alias para un tipo existente para hacer que el código sea más legible y expresivo. Por ejemplo:

type Puntuacion = number;
const puntuacionObtenida: Puntuacion = 95;
//En este caso, Puntuacion es un alias para el tipo number.

//Alias de tipo compuesto: Puedes combinar tipos existentes para crear tipos más complejos y específicos. Por ejemplo:

type Coordenada = [number, number];
const punto: Coordenada = [10, 20];
//En este caso, Coordenada es un alias para un tipo de arreglo que contiene dos números.

//Intersección de tipos: Puedes combinar dos tipos existentes para crear uno nuevo que tenga todas las propiedades de ambos tipos. Por ejemplo:
type Persona = { nombre: string };
type Empleado = { salario: number };
type Trabajador = Persona & Empleado;
//En este caso, Trabajador es un tipo que tiene tanto la propiedad nombre como la propiedad salario.

// Unión de tipos: Puedes crear un tipo que puede ser uno de varios tipos diferentes. Por ejemplo:
type Resultado = "éxito" | "error";
const estado: Resultado = "éxito";
// En este caso, Resultado es un tipo que solo puede ser "éxito" o "error".
// Tipos genéricos: Puedes usar type para definir tipos genéricos que funcionen con varios tipos de datos. Por ejemplo:
type Elemento<T> = {
    valor: T;
};
const numerito: Elemento<number> = { valor: 42 };
const texto: Elemento<string> = { valor: "Hola" };
//En este caso, Elemento es un tipo genérico que puede contener valores de cualquier tipo.

//En resumen, type en TypeScript es una herramienta poderosa para definir y combinar tipos de datos de una manera 
// más legible y expresiva, lo que facilita la creación de código más seguro y mantenible.

// TIPOS ANIDADOS
interface Direccion {
    calle: string;
    ciudad: string;
  }
  
  interface Cliente {
    nombre: string;
    direccion: Direccion;
  }
  
  const cliente1: Cliente = {
    nombre: "Luis",
    direccion: {
      calle: "123 Calle Principal",
      ciudad: "Ciudad Ejemplo",
    },
  };

  enum EstadoCivil {
    Soltero,
    Casado,
    Divorciado,
  }
  
  const estadoCivil: EstadoCivil = EstadoCivil.Casado;
  
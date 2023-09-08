/*En TypeScript, type es una palabra clave que se utiliza para definir nuevos tipos de datos.
 Con type, puedes crear alias o nombres alternativos para tipos existentes o definir tipos completamente nuevos.
Hay varias formas en las que puedes usar type:*/
var puntuacionObtenida = 95;
var punto = [10, 20];
var estado = "éxito";
var numerito = { valor: 42 };
var texto = { valor: "Hola" };
var cliente1 = {
    nombre: "Luis",
    direccion: {
        calle: "123 Calle Principal",
        ciudad: "Ciudad Ejemplo",
    },
};
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Soltero"] = 0] = "Soltero";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
    EstadoCivil[EstadoCivil["Divorciado"] = 2] = "Divorciado";
})(EstadoCivil || (EstadoCivil = {}));
var estadoCivil = EstadoCivil.Casado;

let a = 5;
let b = 2;
console.log(a+b)

let nombre = "eduardo"
console.log(nombre)
nombre = 123
console.log(nombre)

const numero = 1
console.log(numero)
//numero ++ (no se puede porque es una constante)

// funcion saludar
function saludar(nombre)
{
    return 'Hola ' + nombre
}
console.log(saludar("pepe"))

// funcion saludar mejor, con una forma distinta de concatenar Strings
function saludarMejor(apellido, nombre)
{
    return `Hola ${apellido}, ${nombre}`
}
console.log(saludarMejor('Aguirre', 'Edgardo'))

// constantes
const saludo = saludar('Carlos Tevez')
const saludo2 = saludar('Pipo Gorosito')
console.log(saludo)
console.log(saludo2)


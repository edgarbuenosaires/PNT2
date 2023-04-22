let myArray = [];

// pregunto si es un array 'myArray'
console.log(Array.isArray(myArray))
console.log(Array.isArray('')) // un string no es array

// agrego numeros
myArray.push(1)
myArray.push(1)
myArray.push(35)
myArray.push(1)
myArray.push(2)
myArray.push(89)
myArray.push('T')
myArray.push(1)

// muestro
console.log(myArray)
// agrega la T porque js no es tipado

// remueve el primero
myArray.shift()
console.log(myArray)

// agrega primero
myArray.unshift(55)
console.log(myArray)

// ciclo for
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)

}

// para buscar un elemento, se pasa una funcion a una funcion
console.log(myArray.find(elemento => elemento == 1))

// funcion
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

console.log(suma(10, 20))
console.log(resta(10, 20))

// funcion anoonima (dentro de una funcion, llamamos a otra funcion)
function calcular (a, b, funcion)
{
    return funcion(a,b);
}
console.log(calcular(10,55,suma))
console.log(calcular(10,55,resta))

// funcion filtro e include, encuentra todos los valores 
console.log(myArray.filter(elemento=>elemento == 1))
console.log(myArray.filter(elemento=>elemento >4))
console.log(myArray.includes(35))

// funcion sort, para ordenar los elementos del vector
console.log(myArray.sort())

// funcion pop, elimina el ultimo del array
console.log(myArray.pop())
console.log(myArray)

// para mostrar los elementos fuera del array
console.log(...myArray)

// clonar un array
let otroArray = [...myArray]
otroArray.pop()
console.log(otroArray)

// para agregarle un valor
console.log(otroArray.map(o=>o +=10))
console.log(otroArray)

// para encontrar la posicion dentro del array
console.log(myArray.indexOf(2))








